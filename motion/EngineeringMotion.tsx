import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const LIME = '#d1f17a';
const TAU = Math.PI * 2;
const point = (x: number, y: number) => `${x.toFixed(2)},${y.toFixed(2)}`;

/** A frame-driven, seamless twelve-second exploration of the engineering stack. */
export const EngineeringMotion: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const phase = frame / durationInFrames;
  const time = frame / fps;
  const angle = phase * TAU;
  const active = Math.floor(phase * 3);
  const labels = ['INTERFACE', 'INTELLIGENCE', 'INFRASTRUCTURE'];
  const colors = [LIME, '#83d9c4', '#b1bfec'];
  const yOffsets = [-64, 0, 64];
  const rotate = Math.sin(angle) * .2;

  const project = (x: number, z: number, y = 0) => {
    const rx = x * Math.cos(rotate) - z * Math.sin(rotate);
    const rz = x * Math.sin(rotate) + z * Math.cos(rotate);
    return [250 + rx * .85, 155 + rz * .32 + y] as const;
  };

  return <AbsoluteFill style={{fontFamily:'Arial, Helvetica, sans-serif', color:LIME, overflow:'hidden'}}>
    <svg viewBox="0 0 500 330" width="100%" height="100%" role="presentation" aria-hidden="true">
      <defs>
        <radialGradient id="engineering-glow"><stop stopColor="#d1f17a" stopOpacity=".14"/><stop offset="1" stopColor="#d1f17a" stopOpacity="0"/></radialGradient>
        <linearGradient id="engineering-beam" x1="0" y1="0" x2="0" y2="1"><stop stopColor={LIME} stopOpacity="0"/><stop offset=".5" stopColor={LIME} stopOpacity=".6"/><stop offset="1" stopColor={LIME} stopOpacity="0"/></linearGradient>
      </defs>
      <ellipse cx="250" cy="165" rx="210" ry="140" fill="url(#engineering-glow)"/>
      <circle cx="250" cy="155" r="128" fill="none" stroke="#d1f17a" strokeOpacity=".09" strokeDasharray="2 7"/>
      <circle cx="250" cy="155" r="147" fill="none" stroke="#d1f17a" strokeOpacity=".05"/>
      <path d="M250 10V295 M72 155H428" stroke="#d1f17a" strokeOpacity=".1" strokeWidth=".6"/>
      <g stroke="#d1f17a" strokeOpacity=".32" strokeWidth=".7">
        <path d="M28 37V22H43 M457 22h15v15 M28 282v15h15 M457 297h15v-15" fill="none"/>
      </g>
      {yOffsets.map((y, layer) => {
        const isActive = active === layer;
        const lift = Math.sin(angle) * 5;
        const corners = [[-92,-67],[92,-67],[92,67],[-92,67]].map(([x,z])=>project(x,z,y+lift));
        const center = project(0,0,y+lift);
        return <g key={layer}>
          <polygon points={corners.map(([x,z])=>point(x,z)).join(' ')} fill={colors[layer]} fillOpacity={isActive ? .075 : .025} stroke={colors[layer]} strokeOpacity={isActive ? .85 : .35} strokeWidth={isActive ? 1.2 : .8}/>
          {[-.5,0,.5].map((v,i)=>{
            const a=project(v*184,-67,y+lift), b=project(v*184,67,y+lift);
            const c=project(-92,v*134,y+lift), d=project(92,v*134,y+lift);
            return <g key={i} stroke={colors[layer]} strokeOpacity=".16" strokeWidth=".6"><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]}/><line x1={c[0]} y1={c[1]} x2={d[0]} y2={d[1]}/></g>;
          })}
          <circle cx={center[0]} cy={center[1]} r={isActive ? 4 : 2.5} fill={colors[layer]} fillOpacity={isActive ? 1 : .45}/>
          {isActive && <circle cx={center[0]} cy={center[1]} r={10 + ((frame % (fps * 1.5)) / (fps * 1.5)) * 26} fill="none" stroke={colors[layer]} strokeOpacity={.5 * (1-((frame % (fps * 1.5))/(fps * 1.5)))}/>} 
          {corners.map(([x,z],i)=><circle key={i} cx={x} cy={z} r="2" fill={colors[layer]} fillOpacity=".8"/>)}
          <path d={`M${corners[1][0]+5},${corners[1][1]}h24l12,-10h34`} fill="none" stroke={colors[layer]} strokeOpacity={isActive ? .7 : .25} strokeWidth=".7"/>
          <text x={corners[1][0]+40} y={corners[1][1]-17} fill={isActive ? colors[layer] : '#7d8b76'} fontFamily="monospace" fontSize="7" letterSpacing="1">0{layer+1} / {labels[layer]}</text>
        </g>;
      })}
      {[-1,1].map((side)=><g key={side}>
        <line x1={project(side*92,-67)[0]} y1={project(side*92,-67,-64)[1]} x2={project(side*92,-67)[0]} y2={project(side*92,-67,64)[1]} stroke={LIME} strokeOpacity=".22" strokeDasharray="3 5"/>
        <circle cx={project(side*92,-67)[0]} cy={155-64 + ((phase*3+(side===1?.5:0))%1)*128 + project(side*92,-67)[1]-155} r="2.5" fill={LIME}/>
      </g>)}
      <line x1="250" y1={interpolate(Math.sin(angle*3),[-1,1],[60,250])} x2="250" y2={interpolate(Math.sin(angle*3),[-1,1],[88,278])} stroke="url(#engineering-beam)" strokeWidth="2"/>
      <text x="28" y="326" fontFamily="monospace" fontSize="6.8" letterSpacing="1.5" fill="#7f8f75">ONE SYSTEM. THREE LAYERS.</text>
      <g transform="translate(380,310)">
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i=><rect key={i} x={i*6} y={14-(4+(Math.sin(angle*4+i*.8)+1)*4)} width="2" height={4+(Math.sin(angle*4+i*.8)+1)*4} fill={LIME} opacity={.2+i*.05}/>)}
      </g>
    </svg>
  </AbsoluteFill>;
};

function MotionPlayer() {
  const ref=useRef<PlayerRef>(null);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>{
      const paused=media.matches || document.body.classList.contains('motion-paused') || document.body.classList.contains('reduced-motion') || document.hidden;
      if(paused) ref.current?.pause(); else ref.current?.play();
    };
    const observer=new MutationObserver(update);
    observer.observe(document.body,{attributes:true,attributeFilter:['class']});
    media.addEventListener('change',update);
    document.addEventListener('visibilitychange',update);
    update();
    document.querySelector('.hero-art, .art')?.classList.add('remotion-ready');
    return ()=>{observer.disconnect();media.removeEventListener('change',update);document.removeEventListener('visibilitychange',update);};
  },[]);
  return <Player ref={ref} component={EngineeringMotion} compositionWidth={500} compositionHeight={330} fps={30} durationInFrames={360} loop autoPlay={!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !document.body.classList.contains('motion-paused')} controls={false} showVolumeControls={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} style={{width:'100%',height:'100%',pointerEvents:'none'}} aria-label="Animated engineering diagram: interface, intelligence, and infrastructure"/>;
}

const art=document.querySelector<HTMLElement>('.hero-art, .art');
if(art) {
  let mount=document.querySelector<HTMLElement>('#remotion-stage');
  if(!mount){mount=document.createElement('div');mount.id='remotion-stage';art.appendChild(mount);}
  Object.assign(mount.style,{position:'absolute',inset:art.classList.contains('hero-art')?'38px 0 34px':'0',pointerEvents:'none',overflow:'hidden'});
  createRoot(mount).render(<MotionPlayer/>);
}
