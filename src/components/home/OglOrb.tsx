import React, { useEffect, useRef } from 'react';
import { Mesh, Program, Renderer, Triangle, Vec3 } from 'ogl';

/* ── Vertex shader ─────────────────────────────────────────── */
const VERT = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

/* ── Fragment shader ────────────────────────────────────────── */
const FRAG = `
  precision highp float;
  uniform float uTime;
  uniform vec3  uResolution;
  uniform vec3  uMouse;
  uniform float uHoverIntensity;
  uniform float uHover;
  uniform float uHue;
  varying vec2  vUv;

  vec3 mod289v3(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289v4(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289v4(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289v3(i);
    vec4 p=permute(permute(permute(
      i.z+vec4(0.0,i1.z,i2.z,1.0))
      +i.y+vec4(0.0,i1.y,i2.y,1.0))
      +i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=0.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 xv=x_*ns.x+ns.yyyy;
    vec4 yv=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(xv)-abs(yv);
    vec4 b0=vec4(xv.xy,yv.xy);
    vec4 b1=vec4(xv.zw,yv.zw);
    vec4 s0=floor(b0)*2.0+1.0;
    vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  vec3 hsl2rgb(vec3 c){
    vec3 rgb=clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0);
    return c.z+c.y*(rgb-0.5)*(1.0-abs(2.0*c.z-1.0));
  }

  void main(){
    vec2 uv=vUv*2.0-1.0;
    float aspect=uResolution.x/uResolution.y;
    if(aspect>0.0)uv.x*=aspect;
    float dist=length(uv);
    float radius=0.72;
    float aa=0.012;
    float mask=1.0-smoothstep(radius-aa,radius+aa,dist);
    if(mask<0.001){gl_FragColor=vec4(0.0);return;}

    float speed=uTime*0.18;
    float hover=uHover;
    vec2 mouse=uMouse.xy*2.0-1.0;
    float mRotX=mouse.y*0.4*hover;
    float mRotY=mouse.x*0.4*hover;
    vec3 p=vec3(uv*1.4,speed);
    p.x+=mRotX;p.y+=mRotY;

    float n1=snoise(p);
    float n2=snoise(p*1.8+vec3(1.7,9.2,4.1)+speed*0.5);
    float n3=snoise(p*3.2+vec3(8.3,2.8,1.5)+speed*0.3);
    float n=n1*0.5+n2*0.3+n3*0.2;

    float baseHue=uHue/360.0;
    float hue=baseHue+n*0.18+sin(uTime*0.3)*0.04;
    float sat=clamp(0.65+n*0.2+hover*0.1*uHoverIntensity,0.0,1.0);
    float lum=clamp(0.52+n*0.14+dist*-0.08,0.0,1.0);
    vec3 col=hsl2rgb(vec3(hue,sat,lum));

    float rim=pow(1.0-dist/radius,2.5);
    vec3 rimCol=hsl2rgb(vec3(baseHue+0.12,0.9,0.75));
    col=mix(col,rimCol,rim*0.35);
    float center=exp(-dist*dist*3.5);
    col+=vec3(0.9,0.95,1.0)*center*0.22;
    col+=hover*uHoverIntensity*0.06;

    float edgeFade=smoothstep(radius,radius-0.08,dist);
    float alpha=mask*edgeFade*0.95;
    gl_FragColor=vec4(col*alpha,alpha);
  }
`;

export interface OglOrbProps {
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  hue?: number;
  forceHoverState?: boolean;
  backgroundColor?: string;
  className?: string;
}

export const OglOrb: React.FC<OglOrbProps> = ({
  hoverIntensity = 2,
  rotateOnHover = true,
  hue = 210,
  forceHoverState = false,
  backgroundColor,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: Renderer | null = null;
    let animId: number = 0;
    let isDestroyed = false;

    try {
      renderer = new Renderer({
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
      });

      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);

      const canvas = gl.canvas;
      canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border-radius:50%;display:block;';
      container.appendChild(canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new Vec3(container.offsetWidth, container.offsetHeight, container.offsetWidth / (container.offsetHeight || 1)) },
          uMouse: { value: new Vec3(0.5, 0.5, 0) },
          uHoverIntensity: { value: hoverIntensity },
          uHover: { value: forceHoverState ? 1 : 0 },
          uHue: { value: hue },
        },
        transparent: true,
        depthTest: false,
      });

      const mesh = new Mesh(gl, { geometry, program });

      const resize = () => {
        if (isDestroyed || !container || !renderer) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        renderer.setSize(w * dpr, h * dpr);
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        program.uniforms.uResolution.value.set(canvas.width, canvas.height, canvas.width / (canvas.height || 1));
      };

      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(container);

      let targetHover = forceHoverState ? 1 : 0;
      let currentHover = targetHover;
      let targetMouseX = 0.5;
      let targetMouseY = 0.5;
      let currentMouseX = 0.5;
      let currentMouseY = 0.5;

      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        targetMouseX = (e.clientX - rect.left) / rect.width;
        targetMouseY = 1.0 - (e.clientY - rect.top) / rect.height;
      };

      const onMouseEnter = () => {
        if (rotateOnHover) targetHover = 1;
      };

      const onMouseLeave = () => {
        if (rotateOnHover && !forceHoverState) targetHover = 0;
      };

      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseenter', onMouseEnter);
      container.addEventListener('mouseleave', onMouseLeave);

      const t0 = performance.now();
      const update = () => {
        if (isDestroyed || !renderer) return;
        animId = requestAnimationFrame(update);

        const elapsed = (performance.now() - t0) / 1000;
        currentHover += (targetHover - currentHover) * 0.08;
        currentMouseX += (targetMouseX - currentMouseX) * 0.08;
        currentMouseY += (targetMouseY - currentMouseY) * 0.08;

        program.uniforms.uTime.value = elapsed;
        program.uniforms.uHover.value = currentHover;
        program.uniforms.uMouse.value.set(currentMouseX, currentMouseY, 0);

        renderer.render({ scene: mesh });
      };

      update();

      return () => {
        isDestroyed = true;
        cancelAnimationFrame(animId);
        ro.disconnect();
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseenter', onMouseEnter);
        container.removeEventListener('mouseleave', onMouseLeave);
        if (canvas.parentNode === container) {
          container.removeChild(canvas);
        }
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    } catch (err) {
      console.error('OglOrb failed to initialize:', err);
    }
  }, [hoverIntensity, rotateOnHover, hue, forceHoverState]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColor || 'transparent',
      }}
    />
  );
};
