import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const DIM='#7f9177';
const themes=[
  {name:'RELAY',type:'REAL-TIME MESSAGING',caption:'Authenticated WebSocket delivery · relational persistence',nodes:['Client','FastAPI','SQLite'],sub:['INTERFACE','WEBSOCKET API','PERSISTENCE'],color:'#d1f17a'},
  {name:'THE LOOP',type:'EVALUATOR-DRIVEN AI',caption:'Every draft saved. Every iteration inspectable.',nodes:['Plan','Generate','Evaluate','Improve'],sub:['BRIEF','DRAFT','FEEDBACK','ITERATION'],color:'#91d7c0'},
  {name:'AI WORKFLOWS',type:'DOCUMENT PROCESSING',caption:'Document processing → validation → structured KPIs',nodes:['Document','Validate','Structured output'],sub:['EXTRACTION','CHECKS','KPIs'],color:'#b1bfec'},
];

/** The portfolio's actual systems, condensed into a twelve-second visual story. */
export const EngineeringMotion:React.FC=()=>{
  const frame=useCurrentFrame();
  const {fps,durationInFrames}=useVideoConfig();
  const sceneLength=durationInFrames/3;
  const scene=Math.min(2,Math.floor(frame/sceneLength));
  const local=frame%sceneLength;
  const theme=themes[scene];
  const opacity=interpolate(local,[0,.3*fps,sceneLength-.35*fps,sceneLength-1],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const centers=theme.nodes.length===4?[140,345,550,755]:[150,450,750];
  const boxWidth=theme.nodes.length===4?156:190;
  const progress=local/sceneLength;
  const active=Math.min(theme.nodes.length-1,Math.floor(progress*theme.nodes.length));
  return <AbsoluteFill style={{fontFamily:'Arial,Helvetica,sans-serif',overflow:'hidden',color:theme.color}}>
    <svg viewBox="0 0 900 320" width="100%" height="100%" aria-hidden="true" role="presentation">
      <line x1="30" y1="16" x2="870" y2="16" stroke="#34432f"/>
      <text x="30" y="51" fill={DIM} fontFamily="monospace" fontSize="15" letterSpacing="2">ENGINEERING IN MOTION</text>
      <text x="870" y="51" textAnchor="end" fill={DIM} fontFamily="monospace" fontSize="14">0{scene+1} / 03</text>
      <g opacity={opacity}>
        <text x="30" y="92" fontSize="23" letterSpacing="1" fill={theme.color}>{theme.name}</text>
        <text x="870" y="91" textAnchor="end" fill={DIM} fontFamily="monospace" fontSize="13" letterSpacing="1">{theme.type}</text>
        {centers.slice(0,-1).map((cx,i)=>{
          const start=cx+boxWidth/2+8,end=centers[i+1]-boxWidth/2-8;
          const packet=((local/(fps*1.2)+i*.3)%1);
          return <g key={i}>
            <line x1={start} y1="152" x2={end} y2="152" stroke={theme.color} strokeOpacity=".35" strokeWidth="1.3"/>
            <path d={'M'+(end-6)+',148l6,4-6,4'} fill="none" stroke={theme.color} strokeOpacity=".6"/>
            <circle cx={interpolate(packet,[0,1],[start,end])} cy="152" r="3" fill={theme.color}/>
          </g>;
        })}
        {theme.nodes.map((label,i)=>{
          const isActive=i===active;
          return <g key={label}>
            <rect x={centers[i]-boxWidth/2} y="120" width={boxWidth} height="64" rx="3" fill={theme.color} fillOpacity={isActive?.07:.015} stroke={theme.color} strokeOpacity={isActive?.9:.3} strokeWidth={isActive?1.5:1}/>
            <text x={centers[i]} y="159" textAnchor="middle" fill={isActive?'#eff1e9':'#a6b59e'} fontSize={label.length>16?18:21}>{label}</text>
            <text x={centers[i]} y="207" textAnchor="middle" fill={DIM} fontFamily="monospace" fontSize="12" letterSpacing="1.5">{theme.sub[i]}</text>
            {isActive&&<rect x={centers[i]-19} y="228" width="38" height="2" fill={theme.color}/>}
          </g>;
        })}
        {scene===1&&<g>
          <path d="M755 185v36q0 20-20 20H160q-20 0-20-20v-34" fill="none" stroke={theme.color} strokeOpacity=".35" strokeWidth="1.1" strokeDasharray="4 7"/>
          <text x="450" y="260" textAnchor="middle" fontFamily="monospace" fontSize="11" letterSpacing="1.5" fill={DIM}>REFINE WITH EVALUATION FEEDBACK</text>
        </g>}
        <text x="30" y="296" fill="#90a187" fontSize="15">{theme.caption}</text>
      </g>
      {[0,1,2].map(i=><g key={i}>
        <line x1={630+i*82} y1="294" x2={688+i*82} y2="294" stroke="#36432f" strokeWidth="2"/>
        <line x1={630+i*82} y1="294" x2={630+i*82+(i<scene?58:i===scene?progress*58:0)} y2="294" stroke={theme.color} strokeWidth="2"/>
      </g>)}
    </svg>
  </AbsoluteFill>;
};

function MotionPlayer(){
  const ref=useRef<PlayerRef>(null);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>{
      const paused=media.matches||document.body.classList.contains('motion-paused')||document.body.classList.contains('reduced-motion')||document.hidden;
      if(paused){ref.current?.pause();if(media.matches&&ref.current?.getCurrentFrame()===0)ref.current.seekTo(40);}else ref.current?.play();
    };
    const observer=new MutationObserver(update);
    observer.observe(document.body,{attributes:true,attributeFilter:['class']});
    media.addEventListener('change',update);
    document.addEventListener('visibilitychange',update);
    update();
    document.querySelector('.hero-art, .art')?.classList.add('remotion-ready');
    return()=>{observer.disconnect();media.removeEventListener('change',update);document.removeEventListener('visibilitychange',update);};
  },[]);
  return <Player ref={ref} component={EngineeringMotion} compositionWidth={900} compositionHeight={320} fps={30} durationInFrames={360} loop autoPlay={!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!document.body.classList.contains('motion-paused')} initialFrame={window.matchMedia('(prefers-reduced-motion: reduce)').matches?40:0} controls={false} showVolumeControls={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} style={{width:'100%',height:'100%',pointerEvents:'none'}} aria-label="Actual project architectures: Relay, The Loop, and document-processing AI workflows"/>;
}

const art=document.querySelector<HTMLElement>('.hero-art, .art');
if(art){
  let mount=document.querySelector<HTMLElement>('#remotion-stage');
  if(!mount){mount=document.createElement('div');mount.id='remotion-stage';art.appendChild(mount);}
  Object.assign(mount.style,{position:'absolute',inset:art.classList.contains('hero-art')?'38px 0 34px':'0',pointerEvents:'none',overflow:'hidden'});
  createRoot(mount).render(<MotionPlayer/>);
}

