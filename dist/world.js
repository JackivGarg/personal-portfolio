(()=>{var Rr=(r,e)=>()=>(r&&(e=r(r=0)),e);var V0=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);function H0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function W0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function po(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ym(){let r=po("canvas");return r.style.display="block",r}function mo(...r){let e="THREE."+r.shift();aa?aa("log",e,...r):console.log(e,...r)}function Zm(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Be(...r){r=Zm(r);let e="THREE."+r.shift();if(aa)aa("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ke(...r){r=Zm(r);let e="THREE."+r.shift();if(aa)aa("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function lo(...r){let e=r.join(" ");e in Ip||(Ip[e]=!0,Be(...r))}function Jm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Hr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function Qe(r,e,t){return Math.max(e,Math.min(t,r))}function kf(r,e){return(r%e+e)%e}function X0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function q0(r,e,t){return r!==e?(t-r)/(e-r):0}function co(r,e,t){return(1-t)*r+t*e}function Y0(r,e,t,n){return co(r,e,1-Math.exp(-t*n))}function Z0(r,e=1){return e-Math.abs(kf(r,e*2)-e)}function J0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function $0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function K0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Q0(r,e){return r+Math.random()*(e-r)}function j0(r){return r*(.5-Math.random())}function ex(r){r!==void 0&&(Lp=r);let e=Lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tx(r){return r*na}function nx(r){return r*oa}function ix(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function rx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sx(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),u=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*u,o*c);break;case"YXY":r.set(l*u,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*u,o*h,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zh(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Vf(r,e){if(e.constructor===Float32Array)return r;let t=zh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Hf(r,e){if(e.constructor===Float32Array)return r;let t=zh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}function ax(){let r={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(i.r=ia(i.r),i.g=ia(i.g),i.b=ia(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gr?fo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[uo]:{primaries:e,whitePoint:n,transfer:fo,toXYZ:Np,fromXYZ:Up,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Np,fromXYZ:Up,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),r}function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function Ou(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}function zu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Yu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){as.fromArray(r,s);let o=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Wp(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Hr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}function Jl(r,e,t,n,i,s){Ks.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(io.x=s*Ks.x-i*Ks.y,io.y=i*Ks.x+s*Ks.y):io.copy(Ks),r.copy(e),r.x+=io.x,r.y+=io.y,r.applyMatrix4(Qm)}function Mx(r,e,t,n,i,s,a,o){let l;if(e.side===On?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Gr,o),l===null)return null;ic.copy(o),ic.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ic);return c<t.near||c>t.far?null:{distance:c,point:ic.clone(),object:r}}function rc(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,jl),r.getVertexPosition(l,ec),r.getVertexPosition(c,tc);let h=Mx(r,e,t,n,jl,ec,tc,Jp);if(h){let d=new F;Bi.getBarycoord(Jp,jl,ec,tc,d),i&&(h.uv=Bi.getInterpolatedAttribute(i,o,l,c,d,new Ge)),s&&(h.uv1=Bi.getInterpolatedAttribute(s,o,l,c,d,new Ge)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Bi.getNormal(jl,ec,tc,f.normal),h.face=f,h.barycoord=d}return h}function lc(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(Nc.fromBufferAttribute(o,i),Uc.fromBufferAttribute(o,s),t.distanceSqToSegment(Nc,Uc,ef,em)>n)return;ef.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ef);if(!(c<e.near||c>e.far))return{distance:c,point:em.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}function rm(r,e,t,n,i,s,a){let o=uf.distanceSqToPoint(r);if(o<t){let l=new F;uf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Wf(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}function om(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}function ps(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(lm(i))i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(lm(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function bn(r){let e={};for(let t=0;t<r.length;t++){let n=ps(r[t]);for(let i in n)e[i]=n[i]}return e}function lm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function wx(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}function js(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function pc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function eg(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function Cx(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Rx(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=eg(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=Cx(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}function cm(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function hm(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}function Zf(r,e,t,n){let i=Bx(n);switch(t){case Df:return r*e;case rh:return r*e/i.components*i.byteLength;case sh:return r*e/i.components*i.byteLength;case Vr:return r*e*2/i.components*i.byteLength;case ah:return r*e*2/i.components*i.byteLength;case Nf:return r*e*3/i.components*i.byteLength;case Li:return r*e*4/i.components*i.byteLength;case oh:return r*e*4/i.components*i.byteLength;case qo:case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Jo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ch:case uh:return Math.max(r,16)*Math.max(e,8)/4;case lh:case hh:return Math.max(r,8)*Math.max(e,8)/2;case fh:case dh:case mh:case gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ph:case $o:case _h:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Lh:case Dh:case Nh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Uh:case Oh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ko:case Fh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bx(r){switch(r){case qn:case Rf:return{byteLength:1,components:1};case wa:case Pf:case Ii:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Pi:case th:case _i:return{byteLength:4,components:1};case If:case Lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}var mm,mf,gm,Ho,_m,Ma,Gr,On,qi,hs,ba,gf,_f,xf,xm,us,vm,ym,Sm,Mm,bm,Tm,wm,Em,vf,yf,Am,Cm,Rm,Pm,Im,Lm,Dm,Nm,Um,vc,yc,Sc,ra,Mc,bc,Tc,wc,Sf,Om,Fm,Yi,Mf,bf,Tf,Wo,wf,Ef,Af,Cf,fs,Ta,Qc,jc,Ec,zi,Ac,hn,Bm,Xo,Nn,eh,pr,qn,Rf,Pf,wa,th,Pi,_i,Ii,nh,ih,ds,If,Lf,Df,Nf,Li,hr,mr,rh,sh,Vr,ah,oh,qo,Yo,Zo,Jo,lh,ch,hh,uh,fh,dh,ph,mh,gh,$o,_h,xh,vh,yh,Sh,Mh,bh,Th,wh,Eh,Ah,Ch,Rh,Ph,Ih,Lh,Dh,Nh,Uh,Oh,Ko,Fh,ho,Cc,_c,of,lf,cf,hf,zm,Bh,km,gr,pn,uo,fo,gt,xc,Gm,Vm,Hm,Wm,Uf,Xm,qm,Of,Ff,Bf,zf,mi,sa,Ip,aa,$m,ki,Sn,Lp,na,oa,Ea,Ge,Gi,F,Nu,Dp,We,Uu,Np,Up,rt,Bs,Rc,ox,la,lx,Fu,Un,Pt,Pc,ii,go,Ic,pt,zs,wi,cx,hx,Pr,kl,ti,Op,Fp,ur,_o,ux,Bp,ks,rr,Gl,Qa,fx,dx,zp,kp,Gp,Vp,px,Gs,Bu,Ht,gi,mx,ca,Km,Ir,Vl,Ve,Mn,xo,vo,Ei,sr,ku,ar,Vs,Hs,Hp,Gu,Vu,Hu,Wu,Xu,qu,Bi,Vi,or,Ai,Hl,Ws,Xs,qs,Lr,Dr,ss,ja,Wl,Xl,as,$t,ql,gx,Xn,yo,So,bt,_x,eo,Zu,Hi,xx,pi,Ju,Ys,ni,to,cn,Kt,Lc,Ln,Mo,$u,vx,yx,Ci,Sx,Ri,ha,Zs,no,Js,$s,Ks,io,Qm,Yl,ro,Zl,Xp,Ku,qp,bo,lr,Qu,$l,Kl,ua,fa,Yp,os,Ql,Zp,jl,ec,tc,ju,nc,Jp,ic,Wt,To,wo,Qs,$p,sc,Kp,bx,so,ao,Eo,ls,Tx,ac,Ur,Qp,Dc,Or,Nc,Uc,jp,oo,oc,ef,em,da,tm,nm,Wi,pa,im,uf,cc,hc,Ao,Co,Ro,fr,Po,Io,dr,ma,Lo,ga,Do,uc,fc,tf,dc,Fr,Oc,sm,am,nf,rf,sf,_a,xa,va,No,Uo,Oo,jm,Ex,Ax,Xi,Fc,cs,Bc,zc,Br,kc,Gc,Vc,Hc,ri,zr,Wc,Xc,qc,Fo,kr,Yc,Zc,tg,Jc,Bo,zo,af,um,fm,$c,mc,gc,Fi,ko,Nr,dm,pm,Dn,Go,ff,ya,ea,ta,Sa,Kc,qf,Px,Yf,Ix,Lx,Dx,Nx,Ux,Ox,Fx,df,At,U1,pf,Vo,Jf=Rr(()=>{mm=0,mf=1,gm=2,Ho=1,_m=2,Ma=3,Gr=0,On=1,qi=2,hs=0,ba=1,gf=2,_f=3,xf=4,xm=5,us=100,vm=101,ym=102,Sm=103,Mm=104,bm=200,Tm=201,wm=202,Em=203,vf=204,yf=205,Am=206,Cm=207,Rm=208,Pm=209,Im=210,Lm=211,Dm=212,Nm=213,Um=214,vc=0,yc=1,Sc=2,ra=3,Mc=4,bc=5,Tc=6,wc=7,Sf=0,Om=1,Fm=2,Yi=0,Mf=1,bf=2,Tf=3,Wo=4,wf=5,Ef=6,Af=7,Cf=300,fs=301,Ta=302,Qc=303,jc=304,Ec=1e3,zi=1001,Ac=1002,hn=1003,Bm=1004,Xo=1005,Nn=1006,eh=1007,pr=1008,qn=1009,Rf=1010,Pf=1011,wa=1012,th=1013,Pi=1014,_i=1015,Ii=1016,nh=1017,ih=1018,ds=1020,If=35902,Lf=35899,Df=1021,Nf=1022,Li=1023,hr=1026,mr=1027,rh=1028,sh=1029,Vr=1030,ah=1031,oh=1033,qo=33776,Yo=33777,Zo=33778,Jo=33779,lh=35840,ch=35841,hh=35842,uh=35843,fh=36196,dh=37492,ph=37496,mh=37488,gh=37489,$o=37490,_h=37491,xh=37808,vh=37809,yh=37810,Sh=37811,Mh=37812,bh=37813,Th=37814,wh=37815,Eh=37816,Ah=37817,Ch=37818,Rh=37819,Ph=37820,Ih=37821,Lh=36492,Dh=36494,Nh=36495,Uh=36283,Oh=36284,Ko=36285,Fh=36286,ho=2300,Cc=2301,_c=2302,of=2303,lf=2400,cf=2401,hf=2402,zm=3200,Bh=0,km=1,gr="",pn="srgb",uo="srgb-linear",fo="linear",gt="srgb",xc=7680,Gm=519,Vm=512,Hm=513,Wm=514,Uf=515,Xm=516,qm=517,Of=518,Ff=519,Bf=35044,zf="300 es",mi=2e3,sa=2001;Ip={},aa=null;$m={[vc]:vc,[Sc]:Tc,[Mc]:Mc,[ra]:bc,[yc]:yc,[Tc]:Sc,[wc]:wc,[bc]:ra},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lp=1234567,na=Math.PI/180,oa=180/Math.PI;Ea={DEG2RAD:na,RAD2DEG:oa,generateUUID:Hr,clamp:Qe,euclideanModulo:kf,mapLinear:X0,inverseLerp:q0,lerp:co,damp:Y0,pingpong:Z0,smoothstep:J0,smootherstep:$0,randInt:K0,randFloat:Q0,randFloatSpread:j0,seededRandom:ex,degToRad:tx,radToDeg:nx,isPowerOfTwo:ix,ceilPowerOfTwo:rx,floorPowerOfTwo:Gf,setQuaternionFromProperEuler:sx,normalize:Hf,denormalize:Vf},Ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[a+0],u=s[a+1],m=s[a+2],_=s[a+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),b=Math.sin(v);g=Math.sin(g*v)/b,o=Math.sin(o*v)/b,l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+_*o}else{l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],u=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*u-c*f,e[t+1]=l*m+h*f+c*d-o*u,e[t+2]=c*m+h*u+o*f-l*d,e[t+3]=h*m-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),f=l(n/2),u=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(s-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nu=new F,Dp=new Gi,We=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],b=i[4],y=i[7],w=i[2],A=i[5],x=i[8];return s[0]=a*_+o*v+l*w,s[3]=a*p+o*b+l*A,s[6]=a*g+o*y+l*x,s[1]=c*_+h*v+d*w,s[4]=c*p+h*b+d*A,s[7]=c*g+h*y+d*x,s[2]=f*_+u*v+m*w,s[5]=f*p+u*b+m*A,s[8]=f*g+u*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,u=c*s-a*l,m=t*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uu.makeScale(e,t)),this}rotate(e){return lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uu.makeRotation(-e)),this}translate(e,t){return lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uu=new We,Np=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt=ax();Rc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=po("canvas")),Bs.width=e.width,Bs.height=e.height;let i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ox=0,la=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ou(i[a].image)):s.push(Ou(i[a]))}else s=Ou(i);n.url=s}return t||(e.images[this.uuid]=n),n}};lx=0,Fu=new F,Un=class r extends ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=zi,i=zi,s=Nn,a=pr,o=Li,l=qn,c=r.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Hr(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Cf;Un.DEFAULT_ANISOTROPY=1;Pt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(u+1)/2,w=(g+1)/2,A=(h+f)/4,x=(d+_)/4,S=(m+p)/4;return b>y&&b>w?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=x/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=S/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=x/s,i=S/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pc=class extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Un({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new la(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},go=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ic=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},pt=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,f,u,m,_,p)}set(e,t,n,i,s,a,o,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/zs.setFromMatrixColumn(e,0).length(),s=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=a*h,u=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+m*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=m+u*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;t[0]=f+_*o,t[4]=m*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-m,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,u=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=m*c-u,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=u*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,u=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=m*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+m,t[10]=f-_*d}else if(e.order==="XZY"){let f=a*l,u=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,hx)}lookAt(e,t,n){let i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Pr.crossVectors(n,ti),Pr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Pr.crossVectors(n,ti)),Pr.normalize(),kl.crossVectors(ti,Pr),i[0]=Pr.x,i[4]=kl.x,i[8]=ti.x,i[1]=Pr.y,i[5]=kl.y,i[9]=ti.y,i[2]=Pr.z,i[6]=kl.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],b=n[7],y=n[11],w=n[15],A=i[0],x=i[4],S=i[8],P=i[12],C=i[1],N=i[5],L=i[9],z=i[13],I=i[2],G=i[6],X=i[10],O=i[14],Q=i[3],q=i[7],E=i[11],V=i[15];return s[0]=a*A+o*C+l*I+c*Q,s[4]=a*x+o*N+l*G+c*q,s[8]=a*S+o*L+l*X+c*E,s[12]=a*P+o*z+l*O+c*V,s[1]=h*A+d*C+f*I+u*Q,s[5]=h*x+d*N+f*G+u*q,s[9]=h*S+d*L+f*X+u*E,s[13]=h*P+d*z+f*O+u*V,s[2]=m*A+_*C+p*I+g*Q,s[6]=m*x+_*N+p*G+g*q,s[10]=m*S+_*L+p*X+g*E,s[14]=m*P+_*z+p*O+g*V,s[3]=v*A+b*C+y*I+w*Q,s[7]=v*x+b*N+y*G+w*q,s[11]=v*S+b*L+y*X+w*E,s[15]=v*P+b*z+y*O+w*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],_=e[7],p=e[11],g=e[15],v=l*u-c*f,b=o*u-c*d,y=o*f-l*d,w=a*u-c*h,A=a*f-l*h,x=a*d-o*h;return t*(_*v-p*b+g*y)-n*(m*v-p*w+g*A)+i*(m*b-_*w+g*x)-s*(m*y-_*A+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=t*o-n*a,b=t*l-i*a,y=t*c-s*a,w=n*l-i*o,A=n*c-s*o,x=i*c-s*l,S=h*_-d*m,P=h*p-f*m,C=h*g-u*m,N=d*p-f*_,L=d*g-u*_,z=f*g-u*p,I=v*z-b*L+y*N+w*C-A*P+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return e[0]=(o*z-l*L+c*N)*G,e[1]=(i*L-n*z-s*N)*G,e[2]=(_*x-p*A+g*w)*G,e[3]=(f*A-d*x-u*w)*G,e[4]=(l*C-a*z-c*P)*G,e[5]=(t*z-i*C+s*P)*G,e[6]=(p*y-m*x-g*b)*G,e[7]=(h*x-f*y+u*b)*G,e[8]=(a*L-o*C+c*S)*G,e[9]=(n*C-t*L-s*S)*G,e[10]=(m*A-_*y+g*v)*G,e[11]=(d*y-h*A-u*v)*G,e[12]=(o*P-a*N-l*S)*G,e[13]=(t*N-n*P+i*S)*G,e[14]=(_*b-m*w-p*v)*G,e[15]=(h*w-d*b+f*v)*G,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,u=s*h,m=s*d,_=a*h,p=a*d,g=o*d,v=l*c,b=l*h,y=l*d,w=n.x,A=n.y,x=n.z;return i[0]=(1-(_+g))*w,i[1]=(u+y)*w,i[2]=(m-b)*w,i[3]=0,i[4]=(u-y)*A,i[5]=(1-(f+g))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(m+b)*x,i[9]=(p-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=zs.set(i[0],i[1],i[2]).length(),o=zs.set(i[4],i[5],i[6]).length(),l=zs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),wi.copy(this);let c=1/a,h=1/o,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,t.setFromRotationMatrix(wi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=mi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===mi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===sa)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=mi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i),m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===mi)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===sa)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zs=new F,wi=new pt,cx=new F(0,0,0),hx=new F(1,1,1),Pr=new F,kl=new F,ti=new F,Op=new pt,Fp=new Gi,ur=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ur.DEFAULT_ORDER="XYZ";_o=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ux=0,Bp=new F,ks=new Gi,rr=new pt,Gl=new F,Qa=new F,fx=new F,dx=new Gi,zp=new F(1,0,0),kp=new F(0,1,0),Gp=new F(0,0,1),Vp={type:"added"},px={type:"removed"},Gs={type:"childadded",child:null},Bu={type:"childremoved",child:null},Ht=class r extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new F,t=new ur,n=new Gi,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,t){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gl.copy(e):Gl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Qa,Gl,this.up):rr.lookAt(Gl,Qa,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(rr),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vp),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(px),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vp),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new F(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;gi=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},ca=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Vl={h:0,s:0,l:0};Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=kf(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zu(a,s,e+1/3),this.g=zu(a,s,e),this.b=zu(a,s,e-1/3)}return rt.colorSpaceToWorking(this,i),this}setStyle(e,t=pn){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let n=Km[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return rt.workingToColorSpace(Mn.copy(this),e),Math.round(Qe(Mn.r*255,0,255))*65536+Math.round(Qe(Mn.g*255,0,255))*256+Math.round(Qe(Mn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,i=Mn.g,s=Mn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=pn){rt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,i=Mn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Vl);let n=co(Ir.h,Vl.h,t),i=co(Ir.s,Vl.s,t),s=co(Ir.l,Vl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Ve;Ve.NAMES=Km;xo=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},vo=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new F,sr=new F,ku=new F,ar=new F,Vs=new F,Hs=new F,Hp=new F,Gu=new F,Vu=new F,Hu=new F,Wu=new Pt,Xu=new Pt,qu=new Pt,Bi=class r{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ei.subVectors(i,t),sr.subVectors(n,t),ku.subVectors(e,t);let a=Ei.dot(Ei),o=Ei.dot(sr),l=Ei.dot(ku),c=sr.dot(sr),h=sr.dot(ku),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,m=(a*h-o*l)*f;return s.set(1-u-m,m,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(a,ar.y),l.addScaledVector(o,ar.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Wu.setScalar(0),Xu.setScalar(0),qu.setScalar(0),Wu.fromBufferAttribute(e,t),Xu.fromBufferAttribute(e,n),qu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Wu,s.x),a.addScaledVector(Xu,s.y),a.addScaledVector(qu,s.z),a}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),sr.subVectors(e,t),Ei.cross(sr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ei.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Vs.subVectors(i,n),Hs.subVectors(s,n),Gu.subVectors(e,n);let l=Vs.dot(Gu),c=Hs.dot(Gu);if(l<=0&&c<=0)return t.copy(n);Vu.subVectors(e,i);let h=Vs.dot(Vu),d=Hs.dot(Vu);if(h>=0&&d<=h)return t.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Vs,a);Hu.subVectors(e,s);let u=Vs.dot(Hu),m=Hs.dot(Hu);if(m>=0&&u<=m)return t.copy(s);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Hs,o);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return Hp.subVectors(s,i),o=(d-h)/(d-h+(u-m)),t.copy(i).addScaledVector(Hp,o);let g=1/(p+_+f);return a=_*g,o=f*g,t.copy(n).addScaledVector(Vs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ai):Ai.fromBufferAttribute(s,a),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hl.copy(n.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Wl.subVectors(this.max,ja),Ws.subVectors(e.a,ja),Xs.subVectors(e.b,ja),qs.subVectors(e.c,ja),Lr.subVectors(Xs,Ws),Dr.subVectors(qs,Xs),ss.subVectors(Ws,qs);let t=[0,-Lr.z,Lr.y,0,-Dr.z,Dr.y,0,-ss.z,ss.y,Lr.z,0,-Lr.x,Dr.z,0,-Dr.x,ss.z,0,-ss.x,-Lr.y,Lr.x,0,-Dr.y,Dr.x,0,-ss.y,ss.x,0];return!Yu(t,Ws,Xs,qs,Wl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,Ws,Xs,qs,Wl))?!1:(Xl.crossVectors(Lr,Dr),t=[Xl.x,Xl.y,Xl.z],Yu(t,Ws,Xs,qs,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new F,new F,new F,new F,new F,new F,new F,new F],Ai=new F,Hl=new Vi,Ws=new F,Xs=new F,qs=new F,Lr=new F,Dr=new F,ss=new F,ja=new F,Wl=new F,Xl=new F,as=new F;$t=new F,ql=new Ge,gx=0,Xn=class extends ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bf,this.updateRanges=[],this.gpuType=_i,this.version=0,this._normalizationScale=e!==void 0?zh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Vf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.array)}},yo=class extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},So=class extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},bt=class extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}},_x=new Vi,eo=new F,Zu=new F,Hi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_x.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Zu)),this.expandByPoint(eo.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xx=0,pi=new pt,Ju=new Ht,Ys=new F,ni=new Vi,to=new Vi,cn=new F,Kt=class r extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?So:yo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];to.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(ni.min,to.min),ni.expandByPoint(cn),cn.addVectors(ni.max,to.max),ni.expandByPoint(cn)):(ni.expandByPoint(to.min),ni.expandByPoint(to.max))}ni.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),cn.add(Ys)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new F,l[P]=new F;let h=new F,d=new F,f=new F,u=new Ge,m=new Ge,_=new Ge,p=new F,g=new F;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,N),u.fromBufferAttribute(s,P),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,N),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),o[P].add(p),o[C].add(p),o[N].add(p),l[P].add(g),l[C].add(g),l[N].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,C=b.length;P<C;++P){let N=b[P],L=N.start,z=N.count;for(let I=L,G=L+z;I<G;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new F,w=new F,A=new F,x=new F;function S(P){A.fromBufferAttribute(i,P),x.copy(A);let C=o[P];y.copy(C),y.sub(A.multiplyScalar(A.dot(C))).normalize(),w.crossVectors(x,C);let L=w.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,C=n.count;P<C;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new Xn(f,h,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bf,this.updateRanges=[],this.version=0,this.uuid=Hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};Ln=new F,Mo=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?zh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Vf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.data.array)}},$u=new F,vx=new F,yx=new We,Ci=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=$u.subVectors(n,t).cross(vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta($u),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yx.getNormalMatrix(e),i=this.coplanarPoint($u).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sx=0,Ri=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=ba,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vf,this.blendDst=yf,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xc,this.stencilZFail=xc,this.stencilZPass=xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ha=class extends Ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},no=new F,Js=new F,$s=new F,Ks=new Ge,io=new Ge,Qm=new pt,Yl=new F,ro=new F,Zl=new F,Xp=new Ge,Ku=new Ge,qp=new Ge,bo=class extends Ht{constructor(e=new ha){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lc(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Mo(n,3,0,!1)),Zs.setAttribute("uv",new Mo(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Qm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-$s.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Jl(Yl.set(-.5,-.5,0),$s,a,Js,i,s),Jl(ro.set(.5,-.5,0),$s,a,Js,i,s),Jl(Zl.set(.5,.5,0),$s,a,Js,i,s),Xp.set(0,0),Ku.set(1,0),qp.set(1,1);let o=e.ray.intersectTriangle(Yl,ro,Zl,!1,no);if(o===null&&(Jl(ro.set(-.5,.5,0),$s,a,Js,i,s),Ku.set(0,1),o=e.ray.intersectTriangle(Yl,Zl,ro,!1,no),o===null))return;let l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:Bi.getInterpolation(no,Yl,ro,Zl,Xp,Ku,qp,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};lr=new F,Qu=new F,$l=new F,Kl=new F,ua=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qu.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),Kl.copy(this.origin).sub(Qu);let s=e.distanceTo(t)*.5,a=-this.direction.dot($l),o=Kl.dot(this.direction),l=-Kl.dot($l),c=Kl.lengthSq(),h=Math.abs(1-a*a),d,f,u,m;if(h>0)if(d=a*l-o,f=a*o-l,m=s*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Qu).addScaledVector($l,f),u}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);let n=lr.dot(this.direction),i=lr.dot(lr)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,m=t.x-a.x,_=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,b=n.z-a.z,y=Math.abs(l),w=Math.abs(c),A=Math.abs(h),x,S,P,C,N,L,z,I,G,X,O,Q;if(y>=w&&y>=A?(P=l,L=d,G=m,Q=g,l>=0?(x=c,S=h,C=f,N=u,z=_,I=p,X=v,O=b):(x=h,S=c,C=u,N=f,z=p,I=_,X=b,O=v)):w>=A?(P=c,L=f,G=_,Q=v,c>=0?(x=h,S=l,C=u,N=d,z=p,I=m,X=b,O=g):(x=l,S=h,C=d,N=u,z=m,I=p,X=g,O=b)):(P=h,L=u,G=p,Q=b,h>=0?(x=l,S=c,C=d,N=f,z=m,I=_,X=g,O=v):(x=c,S=l,C=f,N=d,z=_,I=m,X=v,O=g)),P===0)return null;let q=x/P,E=S/P,V=1/P,te=C-q*L,le=N-E*L,k=z-q*G,j=I-E*G,oe=X-q*Q,pe=O-E*Q,ce=oe*j-pe*k,Re=te*pe-le*oe,Ye=k*le-j*te;if(i){if(ce<0||Re<0||Ye<0)return null}else if((ce<0||Re<0||Ye<0)&&(ce>0||Re>0||Ye>0))return null;let we=ce+Re+Ye;if(we===0)return null;let Fe=V*(ce*L+Re*G+Ye*Q);return(we>0?Fe<0:Fe>0)?null:this.at(Fe/we,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fa=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=Sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yp=new pt,os=new ua,Ql=new Hi,Zp=new F,jl=new F,ec=new F,tc=new F,ju=new F,nc=new F,Jp=new F,ic=new F,Wt=class extends Ht{constructor(e=new Kt,t=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){nc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(ju.fromBufferAttribute(d,e),a?nc.addScaledVector(ju,h):nc.addScaledVector(ju.sub(t),h))}t.add(nc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(Ql.containsPoint(os.origin)===!1&&(os.intersectSphere(Ql,Zp)===null||os.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Yp.copy(s).invert(),os.copy(e.ray).applyMatrix4(Yp),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,u.start),b=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,w=b;y<w;y+=3){let A=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);i=rc(this,g,e,n,c,h,d,A,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);i=rc(this,a,e,n,c,h,d,v,b,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,u.start),b=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,w=b;y<w;y+=3){let A=y,x=y+1,S=y+2;i=rc(this,g,e,n,c,h,d,A,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=p,b=p+1,y=p+2;i=rc(this,a,e,n,c,h,d,v,b,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};To=class extends Un{constructor(e=null,t=1,n=1,i,s,a,o,l,c=hn,h=hn,d,f){super(null,a,o,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wo=class extends Xn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new pt,$p=new pt,sc=[],Kp=new Vi,bx=new pt,so=new Wt,ao=new Hi,Eo=class extends Wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Kp.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Kp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),ao.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Qs),$p.multiplyMatrices(n,Qs),so.matrixWorld=$p,so.raycast(e,sc);for(let a=0,o=sc.length;a<o;a++){let l=sc[a];l.instanceId=s,l.object=this,t.push(l)}sc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new To(new Float32Array(i*this.count),i,this.count,rh,_i));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new Hi,Tx=new Ge(.5,.5),ac=new F,Ur=class{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,s=new Ci,a=new Ci){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],m=s[8],_=s[9],p=s[10],g=s[11],v=s[12],b=s[13],y=s[14],w=s[15];if(i[0].setComponents(c-a,u-h,g-m,w-v).normalize(),i[1].setComponents(c+a,u+h,g+m,w+v).normalize(),i[2].setComponents(c+o,u+d,g+_,w+b).normalize(),i[3].setComponents(c-o,u-d,g-_,w-b).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,u-f,g-p,w-y).normalize();else if(i[4].setComponents(c-l,u-f,g-p,w-y).normalize(),t===mi)i[5].setComponents(c+l,u+f,g+p,w+y).normalize();else if(t===sa)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=Tx.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ac.x=i.normal.x>0?e.max.x:e.min.x,ac.y=i.normal.y>0?e.max.y:e.min.y,ac.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qp=new pt,Dc=class r{constructor(){this.coordinateSystem=mi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];Qp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ur),n[i].setFromProjectionMatrix(Qp,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ur),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}},Or=class extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nc=new F,Uc=new F,jp=new pt,oo=new ua,oc=new Hi,ef=new F,em=new F,da=class extends Ht{constructor(e=new Kt,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Nc.fromBufferAttribute(t,i-1),Uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nc.distanceTo(Uc);e.setAttribute("lineDistance",new bt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(i),oc.radius+=s,e.ray.intersectsSphere(oc)===!1)return;jp.copy(i).invert(),oo.copy(e.ray).applyMatrix4(jp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=u,p=m-1;_<p;_+=c){let g=h.getX(_),v=h.getX(_+1),b=lc(this,e,oo,l,g,v,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(m-1),p=h.getX(u),g=lc(this,e,oo,l,_,p,m-1);g&&t.push(g)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=u,p=m-1;_<p;_+=c){let g=lc(this,e,oo,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=lc(this,e,oo,l,m-1,u,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};tm=new F,nm=new F,Wi=class extends da{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)tm.fromBufferAttribute(t,i),nm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tm.distanceTo(nm);e.setAttribute("lineDistance",new bt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},pa=class extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},im=new pt,uf=new ua,cc=new Hi,hc=new F,Ao=class extends Ht{constructor(e=new Kt,t=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(i),cc.radius+=s,e.ray.intersectsSphere(cc)===!1)return;im.copy(i).invert(),uf.copy(e.ray).applyMatrix4(im);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let m=f,_=u;m<_;m++){let p=c.getX(m);hc.fromBufferAttribute(d,p),rm(hc,p,l,i,e,t,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let m=f,_=u;m<_;m++)hc.fromBufferAttribute(d,m),rm(hc,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};Co=class extends Un{constructor(e=[],t=fs,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ro=class extends Un{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fr=class extends Un{constructor(e,t,n=Pi,i,s,a,o=hn,l=hn,c,h=hr,d=1){if(h!==hr&&h!==mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new la(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Po=class extends fr{constructor(e,t=Pi,n=fs,i,s,a=hn,o=hn,l,c=hr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Io=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dr=class r extends Kt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function m(_,p,g,v,b,y,w,A,x,S,P){let C=y/x,N=w/S,L=y/2,z=w/2,I=A/2,G=x+1,X=S+1,O=0,Q=0,q=new F;for(let E=0;E<X;E++){let V=E*N-z;for(let te=0;te<G;te++){let le=te*C-L;q[_]=le*v,q[p]=V*b,q[g]=I,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[g]=A>0?1:-1,h.push(q.x,q.y,q.z),d.push(te/x),d.push(1-E/S),O+=1}}for(let E=0;E<S;E++)for(let V=0;V<x;V++){let te=f+V+G*E,le=f+V+G*(E+1),k=f+(V+1)+G*(E+1),j=f+(V+1)+G*E;l.push(te,le,j),l.push(le,k,j),Q+=6}o.addGroup(u,Q,P),u+=Q,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ma=class r extends Kt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],f=[],u=[],m=0,_=[],p=n/2,g=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(u,2));function v(){let y=new F,w=new F,A=0,x=(t-e)/n;for(let S=0;S<=s;S++){let P=[],C=S/s,N=C*(t-e)+e;for(let L=0;L<=i;L++){let z=L/i,I=z*l+o,G=Math.sin(I),X=Math.cos(I);w.x=N*G,w.y=-C*n+p,w.z=N*X,d.push(w.x,w.y,w.z),y.set(G,x,X).normalize(),f.push(y.x,y.y,y.z),u.push(z,1-C),P.push(m++)}_.push(P)}for(let S=0;S<i;S++)for(let P=0;P<s;P++){let C=_[P][S],N=_[P+1][S],L=_[P+1][S+1],z=_[P][S+1];(e>0||P!==0)&&(h.push(C,N,z),A+=3),(t>0||P!==s-1)&&(h.push(N,L,z),A+=3)}c.addGroup(g,A,0),g+=A}function b(y){let w=m,A=new Ge,x=new F,S=0,P=y===!0?e:t,C=y===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,p*C,0),f.push(0,C,0),u.push(.5,.5),m++;let N=m;for(let L=0;L<=i;L++){let I=L/i*l+o,G=Math.cos(I),X=Math.sin(I);x.x=P*X,x.y=p*C,x.z=P*G,d.push(x.x,x.y,x.z),f.push(0,C,0),A.x=G*.5+.5,A.y=X*.5*C+.5,u.push(A.x,A.y),m++}for(let L=0;L<i;L++){let z=w+L,I=N+L;y===!0?h.push(I,I+1,z):h.push(I+1,I,z),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Lo=class r extends ma{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ga=class r extends Kt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(s.slice(),3)),this.setAttribute("uv",new bt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let b=new F,y=new F,w=new F;for(let A=0;A<t.length;A+=3)u(t[A+0],b),u(t[A+1],y),u(t[A+2],w),l(b,y,w,v)}function l(v,b,y,w){let A=w+1,x=[];for(let S=0;S<=A;S++){x[S]=[];let P=v.clone().lerp(y,S/A),C=b.clone().lerp(y,S/A),N=A-S;for(let L=0;L<=N;L++)L===0&&S===A?x[S][L]=P:x[S][L]=P.clone().lerp(C,L/N)}for(let S=0;S<A;S++)for(let P=0;P<2*(A-S)-1;P++){let C=Math.floor(P/2);P%2===0?(f(x[S][C+1]),f(x[S+1][C]),f(x[S][C])):(f(x[S][C+1]),f(x[S+1][C+1]),f(x[S+1][C]))}}function c(v){let b=new F;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(v),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function h(){let v=new F;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];let y=p(v)/2/Math.PI+.5,w=g(v)/Math.PI+.5;a.push(y,1-w)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let b=a[v+0],y=a[v+2],w=a[v+4],A=Math.max(b,y,w),x=Math.min(b,y,w);A>.9&&x<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function u(v,b){let y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function m(){let v=new F,b=new F,y=new F,w=new F,A=new Ge,x=new Ge,S=new Ge;for(let P=0,C=0;P<s.length;P+=9,C+=6){v.set(s[P+0],s[P+1],s[P+2]),b.set(s[P+3],s[P+4],s[P+5]),y.set(s[P+6],s[P+7],s[P+8]),A.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),w.copy(v).add(b).add(y).divideScalar(3);let N=p(w);_(A,C+0,v,N),_(x,C+2,b,N),_(S,C+4,y,N)}}function _(v,b,y,w){w<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},Do=class r extends ga{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},uc=new F,fc=new F,tf=new F,dc=new Bi,Fr=class extends Kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(na*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f=new Map,u=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:p,c:g}=dc;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),dc.getNormal(tf),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let b=(v+1)%3,y=d[v],w=d[b],A=dc[h[v]],x=dc[h[b]],S=`${y}_${w}`,P=`${w}_${y}`,C=f.get(P);C?(tf.dot(C.normal)<=s&&(u.push(A.x,A.y,A.z),u.push(x.x,x.y,x.z)),f.set(P,null)):f.has(S)||f.set(S,{index0:c[v],index1:c[b],normal:tf.clone()})}}for(let m of f.values())if(m){let{index0:_,index1:p}=m;uc.fromBufferAttribute(o,_),fc.fromBufferAttribute(o,p),u.push(uc.x,uc.y,uc.z),u.push(fc.x,fc.y,fc.z)}this.setAttribute("position",new bt(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Oc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Ge:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,i=[],s=[],a=[],o=new F,l=new pt;for(let u=0;u<=e;u++){let m=u/e;i[u]=this.getTangentAt(m,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Qe(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(Qe(s[0].dot(s[e]),-1,1));u/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(u=-u);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],u*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};sm=new F,am=new F,nf=new Wf,rf=new Wf,sf=new Wf,_a=class extends Oc{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(am.subVectors(i[0],i[1]).add(i[0]),c=am);let d=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(sm.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=sm),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),nf.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,p),rf.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,p),sf.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(nf.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),rf.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),sf.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(nf.calc(l),rf.calc(l),sf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},xa=class r extends ga{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},va=class r extends ga{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},No=class r extends Kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-a;for(let b=0;b<c;b++){let y=b*d-s;m.push(y,-v,0),_.push(0,0,1),p.push(b/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let b=v+c*g,y=v+c*(g+1),w=v+1+c*(g+1),A=v+1+c*g;u.push(b,y,A),u.push(y,w,A)}this.setIndex(u),this.setAttribute("position",new bt(m,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Uo=class r extends Kt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new F,u=new F,m=new F;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let g=0;g<=i;g++){let v=g/i*s;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),c.push(u.x,u.y,u.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,b=(i+1)*(_-1)+p,y=(i+1)*_+p;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Oo=class extends Kt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new F,s=new F;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],f=d.start,u=d.count;for(let m=f,_=f+u;m<_;m+=3)for(let p=0;p<3;p++){let g=o.getX(m+p),v=o.getX(m+(p+1)%3);i.fromBufferAttribute(a,g),s.fromBufferAttribute(a,v),om(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),om(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new bt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};jm={clone:ps,merge:bn},Ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xi=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ex,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=wx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new We().fromArray(i.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fc=class extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},cs=class extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bc=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zc=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Br=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lf,endingEnd:lf}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cf:s=e,o=2*t-n;break;case hf:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cf:a=e,l=2*n-t;break;case hf:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,b=(-1-u)*p+(1.5+u)*_+.5*m,y=u*p-u*_;for(let w=0;w!==o;++w)s[w]=g*a[h+w]+v*a[c+w]+b*a[l+w]+y*a[d+w];return s}},Gc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*h;return s}},Vc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Hc=class extends Br{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(i-t),_=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*m;return s}let f=o*2,u=e-1;for(let m=0;m!==o;++m){let _=a[c+m],p=a[l+m],g=u*f+m*2,v=d[g],b=d[g+1],y=e*f+m*2,w=h[y],A=h[y+1],x=Rx(n,t,v,w,i);s[m]=eg(x,_,b,A,p)}return s}};ri=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=js(t,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:js(e.times,Array),values:js(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),pc(e.settings)&&(n.settings={inTangents:js(e.settings.inTangents,Array),outTangents:js(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ho:t=this.InterpolantFactoryMethodDiscrete;break;case Cc:t=this.InterpolantFactoryMethodLinear;break;case _c:t=this.InterpolantFactoryMethodSmooth;break;case of:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return Cc;case this.InterpolantFactoryMethodSmooth:return _c;case this.InterpolantFactoryMethodBezier:return of}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;pc(this.settings)&&(cm(this.settings.inTangents,e),cm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;pc(this.settings)&&(hm(this.settings.inTangents,e),hm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&W0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_c,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let _=t[d+m];if(_!==t[f+m]||_!==t[u+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,pc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Cc;zr=class extends ri{constructor(e,t,n){super(e,t,n)}};zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=ho;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;Wc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Wc.prototype.ValueTypeName="color";Xc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Xc.prototype.ValueTypeName="number";qc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Gi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Fo=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;kr=class extends ri{constructor(e,t,n){super(e,t,n)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=ho;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;Yc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Yc.prototype.ValueTypeName="vector";Zc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tg=new Zc,Jc=class{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";Bo=class extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zo=class extends Bo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},af=new pt,um=new F,fm=new F,$c=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;um.setFromMatrixPosition(e.matrixWorld),t.position.copy(um),fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){af.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(af,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===sa||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mc=new F,gc=new Gi,Fi=new F,ko=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mc,gc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(mc,gc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Nr=new F,dm=new Ge,pm=new Ge,Dn=class extends ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,dm,pm),t.subVectors(pm,dm)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Go=class extends ko{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ff=class extends $c{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends Bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new ff}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ea=-90,ta=1,Sa=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dn(ea,ta,e,t);i.layers=this.layers,this.add(i);let s=new Dn(ea,ta,e,t);s.layers=this.layers,this.add(s);let a=new Dn(ea,ta,e,t);a.layers=this.layers,this.add(a);let o=new Dn(ea,ta,e,t);o.layers=this.layers,this.add(o);let l=new Dn(ea,ta,e,t);l.layers=this.layers,this.add(l);let c=new Dn(ea,ta,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Kc=class extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},qf="\\[\\]\\.:\\/",Px=new RegExp("["+qf+"]","g"),Yf="[^"+qf+"]",Ix="[^"+qf.replace("\\.","")+"]",Lx=/((?:WC+[\/:])*)/.source.replace("WC",Yf),Dx=/(WCOD+)?/.source.replace("WCOD",Ix),Nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yf),Ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yf),Ox=new RegExp("^"+Lx+Dx+Nx+Ux+"$"),Fx=["material","materials","bones","map"],df=class{constructor(e,t,n){let i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(e){let t=Ox.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Fx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=df;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];U1=new Float32Array(1),pf=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}},Vo=class extends Wi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ve(n),i=new Ve(i);let s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,u=0,m=-o;f<=t;f++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let _=f===s?n:i;_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3}let h=new Kt;h.setAttribute("position",new bt(l,3)),h.setAttribute("color",new bt(c,3));let d=new Or({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function bg(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kx(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}function SS(r,e,t,n,i,s){let a=new Ve(0),o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function m(v){let b=!1,y=u(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),b=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,b){let y=u(b);y&&y.isCubeTexture?(c===void 0&&(c=new Wt(new dr(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:ps(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tg),c.material.toneMapped=rt.getTransfer(y.colorSpace)!==gt,(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Wt(new No(2,2),new Xi({name:"BackgroundMaterial",uniforms:ps(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=rt.getTransfer(y.colorSpace)!==gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,b){v.getRGB(kh,Xf(r)),t.buffers.color.setClear(kh.r,kh.g,kh.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:_,dispose:g}}function MS(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(N,L,z,I,G){let X=!1,O=d(N,I,z,L);s!==O&&(s=O,c(s.object)),X=u(N,I,z,G),X&&m(N,I,z,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(N,L,z,I),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,L,z,I){let G=I.wireframe===!0,X=n[L.id];X===void 0&&(X={},n[L.id]=X);let O=N.isInstancedMesh===!0?N.id:0,Q=X[O];Q===void 0&&(Q={},X[O]=Q);let q=Q[z.id];q===void 0&&(q={},Q[z.id]=q);let E=q[G];return E===void 0&&(E=f(l()),q[G]=E),E}function f(N){let L=[],z=[],I=[];for(let G=0;G<t;G++)L[G]=0,z[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:I,object:N,attributes:{},index:null}}function u(N,L,z,I){let G=s.attributes,X=L.attributes,O=0,Q=z.getAttributes();for(let q in Q)if(Q[q].location>=0){let V=G[q],te=X[q];if(te===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),V===void 0||V.attribute!==te||te&&V.data!==te.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function m(N,L,z,I){let G={},X=L.attributes,O=0,Q=z.getAttributes();for(let q in Q)if(Q[q].location>=0){let V=X[q];V===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(V=N.instanceColor));let te={};te.attribute=V,V&&V.data&&(te.data=V.data),G[q]=te,O++}s.attributes=G,s.attributesNum=O,s.index=I}function _(){let N=s.newAttributes;for(let L=0,z=N.length;L<z;L++)N[L]=0}function p(N){g(N,0)}function g(N,L){let z=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;z[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),G[N]!==L&&(r.vertexAttribDivisor(N,L),G[N]=L)}function v(){let N=s.newAttributes,L=s.enabledAttributes;for(let z=0,I=L.length;z<I;z++)L[z]!==N[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function b(N,L,z,I,G,X,O){O===!0?r.vertexAttribIPointer(N,L,z,G,X):r.vertexAttribPointer(N,L,z,I,G,X)}function y(N,L,z,I){_();let G=I.attributes,X=z.getAttributes(),O=L.defaultAttributeValues;for(let Q in X){let q=X[Q];if(q.location>=0){let E=G[Q];if(E===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(E=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(E=N.instanceColor)),E!==void 0){let V=E.normalized,te=E.itemSize,le=e.get(E);if(le===void 0)continue;let k=le.buffer,j=le.type,oe=le.bytesPerElement,pe=j===r.INT||j===r.UNSIGNED_INT||E.gpuType===th;if(E.isInterleavedBufferAttribute){let ce=E.data,Re=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,Ye=E.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let we=0;we<q.locationSize;we++)g(q.location+we,ce.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let we=0;we<q.locationSize;we++)p(q.location+we);r.bindBuffer(r.ARRAY_BUFFER,k);for(let we=0;we<q.locationSize;we++)b(q.location+we,te/q.locationSize,j,V,Re*oe,(Ye+te/q.locationSize*we)*oe,pe)}else{if(E.isInstancedBufferAttribute){for(let ce=0;ce<q.locationSize;ce++)g(q.location+ce,E.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let ce=0;ce<q.locationSize;ce++)p(q.location+ce);r.bindBuffer(r.ARRAY_BUFFER,k);for(let ce=0;ce<q.locationSize;ce++)b(q.location+ce,te/q.locationSize,j,V,te*oe,te/q.locationSize*ce*oe,pe)}}else if(O!==void 0){let V=O[Q];if(V!==void 0)switch(V.length){case 2:r.vertexAttrib2fv(q.location,V);break;case 3:r.vertexAttrib3fv(q.location,V);break;case 4:r.vertexAttrib4fv(q.location,V);break;default:r.vertexAttrib1fv(q.location,V)}}}}v()}function w(){P();for(let N in n){let L=n[N];for(let z in L){let I=L[z];for(let G in I){let X=I[G];for(let O in X)h(X[O].object),delete X[O];delete I[G]}}delete n[N]}}function A(N){if(n[N.id]===void 0)return;let L=n[N.id];for(let z in L){let I=L[z];for(let G in I){let X=I[G];for(let O in X)h(X[O].object),delete X[O];delete I[G]}}delete n[N.id]}function x(N){for(let L in n){let z=n[L];for(let I in z){let G=z[I];if(G[N.id]===void 0)continue;let X=G[N.id];for(let O in X)h(X[O].object),delete X[O];delete G[N.id]}}}function S(N){for(let L in n){let z=n[L],I=N.isInstancedMesh===!0?N.id:0,G=z[I];if(G!==void 0){for(let X in G){let O=G[X];for(let Q in O)h(O[Q].object),delete O[Q];delete G[X]}delete z[I],Object.keys(z).length===0&&delete n[L]}}}function P(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function bS(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function TS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Li&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==qn&&x!==_i&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:A}}function wS(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Ci,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let v=s?0:n,b=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,b,u);for(let w=0;w!==b;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,y=u;b!==_;++b,y+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ig(r,e,t){return new el(r,{minFilter:pr,generateMipmaps:e,type:Ii,colorSpace:uo,depthBuffer:t})}function tl(r,e,t){return new Xi({name:r,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:On,blending:hs,depthTest:!1,depthWrite:!1})}function IS(){return tl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function LS(){return tl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Eg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function DS(){return tl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${AS}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rg(){return tl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function sg(){return tl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function NS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===Qc||u===jc)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new el(m.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Qc||u===jc,_=u===fs||u===Ta;if(m||_){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Vh(r)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Vh(r)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===Qc?f.mapping=fs:u===jc&&(f.mapping=Ta),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function US(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&lo("WebGLRenderer: "+n+" extension not supported."),i}}}function OS(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)e.update(_[p],r.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,b=p.count>=65535?So:yo,y=new b(Math.ceil(v/3)*6,1),w=y.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,P=0;S<v;S+=3){let C=x[S+0],N=x[S+1],L=x[S+2];w[P++]=C,w[P++]=N,w[P++]=N,w[P++]=L,w[P++]=L,w[P++]=C}}else{g=p.version;for(let x=0,S=0;x<v;x+=3){let P=x+0,C=x+1,N=x+2;w[S++]=P,w[S++]=C,w[S++]=C,w[S++]=N,w[S++]=N,w[S++]=P}}y.version=g;let A=s.get(m);A&&e.remove(A),s.set(m,y)}function f(m){let _=s.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return s.get(m)}function u(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function FS(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,u){u!==0&&(r.drawElementsInstanced(n,f,s,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function BS(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ke("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zS(r,e,t){let n=new WeakMap,i=new Pt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;u===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*w*4*d),x=new go(A,y,w,d);x.type=_i,x.needsUpdate=!0;let S=b*4;for(let C=0;C<d;C++){let N=p[C],L=g[C],z=v[C],I=y*w*4*C;for(let G=0;G<N.count;G++){let X=G*S;u===!0&&(i.fromBufferAttribute(N,G),A[I+X+0]=i.x,A[I+X+1]=i.y,A[I+X+2]=i.z,A[I+X+3]=0),m===!0&&(i.fromBufferAttribute(L,G),A[I+X+4]=i.x,A[I+X+5]=i.y,A[I+X+6]=i.z,A[I+X+7]=0),_===!0&&(i.fromBufferAttribute(z,G),A[I+X+8]=i.x,A[I+X+9]=i.y,A[I+X+10]=i.z,A[I+X+11]=z.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new Ge(y,w)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function kS(r,e,t,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function VS(r,e,t,n,i,s){let a=new ii(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Kt;h.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bt([0,2,0,0,2,0],2));let d=new Fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Wt(h,d),u=new Go(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,b=[],y=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let x=0;x<b.length;x++){let S=b[x];S.setSize&&S.setSize(w,A)}},this.setEffects=function(w){b=w,y=b.length>0&&b[0].isRenderPass===!0;let A=a.width,x=a.height;b.length>0&&o===null&&(o=new ii(A,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new ii(A,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&b.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new fr(A,x),s===!0&&(c.format=mr,c.type=ds)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<b.length;P++){let C=b[P];C.setSize&&C.setSize(A,x),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,A){if(p||w.toneMapping===Yi&&b.length===0)return!1;if(v=A,A!==null){let x=A.width,S=A.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return y===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=Yi,!0},this.hasRenderPass=function(){return y},this.end=function(w,A){w.toneMapping=g,p=!0;let x=a,S=o;for(let P=0;P<b.length;P++){let C=b[P];C.enabled!==!1&&(C.render(w,S,x,A),C.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(m!==w.outputColorSpace||_!==w.toneMapping){m=w.outputColorSpace,_=w.toneMapping,d.defines={},rt.getTransfer(m)===gt&&(d.defines.SRGB_TRANSFER="");let P=GS[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function Ca(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=ag[i];if(s===void 0&&(s=new Float32Array(i),ag[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wh(r,e){let t=og[e];t===void 0&&(t=new Int32Array(e),og[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function HS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function WS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function XS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function qS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function YS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;hg.set(n),r.uniformMatrix2fv(this.addr,!1,hg),sn(t,n)}}function ZS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;cg.set(n),r.uniformMatrix3fv(this.addr,!1,cg),sn(t,n)}}function JS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;lg.set(n),r.uniformMatrix4fv(this.addr,!1,lg),sn(t,n)}}function $S(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function KS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function QS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function jS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function eM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function nM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function iM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function Xh(r){return r.version===0&&(r.compareFunction=Ff,r.needsUpdate=!0),r}function rM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Xh(Cg):s=Ag,t.setTexture2D(e||s,i)}function sM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ig,i)}function aM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Xh(Rg):s=Lg,t.setTextureCube(e||s,i)}function oM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pg,i)}function lM(r){switch(r){case 5126:return HS;case 35664:return WS;case 35665:return XS;case 35666:return qS;case 35674:return YS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return $S;case 35667:case 35671:return KS;case 35668:case 35672:return QS;case 35669:case 35673:return jS;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}function cM(r,e){r.uniform1fv(this.addr,e)}function hM(r,e){let t=Ca(e,this.size,2);r.uniform2fv(this.addr,t)}function uM(r,e){let t=Ca(e,this.size,3);r.uniform3fv(this.addr,t)}function fM(r,e){let t=Ca(e,this.size,4);r.uniform4fv(this.addr,t)}function dM(r,e){let t=Ca(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pM(r,e){let t=Ca(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mM(r,e){let t=Ca(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gM(r,e){r.uniform1iv(this.addr,e)}function _M(r,e){r.uniform2iv(this.addr,e)}function xM(r,e){r.uniform3iv(this.addr,e)}function vM(r,e){r.uniform4iv(this.addr,e)}function yM(r,e){r.uniform1uiv(this.addr,e)}function SM(r,e){r.uniform2uiv(this.addr,e)}function MM(r,e){r.uniform3uiv(this.addr,e)}function bM(r,e){r.uniform4uiv(this.addr,e)}function TM(r,e,t){let n=this.cache,i=e.length,s=Wh(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Xh(Cg):a=Ag;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function wM(r,e,t){let n=this.cache,i=e.length,s=Wh(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ig,s[a])}function EM(r,e,t){let n=this.cache,i=e.length,s=Wh(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Xh(Rg):a=Lg;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function AM(r,e,t){let n=this.cache,i=e.length,s=Wh(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Pg,s[a])}function CM(r){switch(r){case 5126:return cM;case 35664:return hM;case 35665:return uM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return vM;case 5125:return yM;case 36294:return SM;case 36295:return MM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return AM}}function ug(r,e){r.seq.push(e),r.map[e.id]=e}function RM(r,e,t){let n=r.name,i=n.length;for($f.lastIndex=0;;){let s=$f.exec(n),a=$f.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ug(t,c===void 0?new Qf(o,r,e):new jf(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new ed(o),ug(t,d)),t=d}}}function fg(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function LM(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function DM(r){rt._getMatrix(dg,rt.workingColorSpace,r);let e=`mat3( ${dg.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(r)){case fo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pg(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+LM(r.getShaderSource(e),o)}else return s}function NM(r,e){let t=DM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function OM(r,e){let t=UM[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function FM(){rt.getLuminanceCoefficients(Gh);let r=Gh.x.toFixed(4),e=Gh.y.toFixed(4),t=Gh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function zM(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kM(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function jo(r){return r!==""}function mg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function gg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function td(r){return r.replace(GM,VM)}function VM(r,e){let t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return td(t)}function _g(r){return r.replace(HM,WM)}function WM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qM(r){return XM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function ZM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":YM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}function $M(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":JM[r.combine]||"ENVMAP_BLENDING_NONE"}function KM(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=qM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ZM(t),d=$M(t),f=BM(t),u=zM(s),m=i.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(jo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(jo).join(`
`),p.length>0&&(p+=`
`)):(_=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),p=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Yi?OM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,NM("linearToOutputTexel",t.outputColorSpace),FM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),a=td(a),a=mg(a,t),a=gg(a,t),o=td(o),o=mg(o,t),o=gg(o,t),a=_g(a),o=_g(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+a,b=g+p+o,y=fg(i,i.VERTEX_SHADER,v),w=fg(i,i.FRAGMENT_SHADER,b);i.attachShader(m,y),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(C){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",L=i.getShaderInfoLog(y)||"",z=i.getShaderInfoLog(w)||"",I=N.trim(),G=L.trim(),X=z.trim(),O=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,y,w);else{let q=pg(i,y,"vertex"),E=pg(i,w,"fragment");ke("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+q+`
`+E)}else I!==""?Be("WebGLProgram: Program Info Log:",I):(G===""||X==="")&&(Q=!1);Q&&(C.diagnostics={runnable:O,programLog:I,vertexShader:{log:G,prefix:_},fragmentShader:{log:X,prefix:p}})}i.deleteShader(y),i.deleteShader(w),x=new Aa(i,m),S=kM(i,m)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,PM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}function jM(r){return r===Vr||r===$o||r===Ko}function eb(r,e,t,n,i,s){let a=new _o,o=new nd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,C,N,L){let z=C.fog,I=N.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||G,X),Q=f[x.type],q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let E=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,V=E!==void 0?E.length:0,te=0;I.morphAttributes.position!==void 0&&(te=1),I.morphAttributes.normal!==void 0&&(te=2),I.morphAttributes.color!==void 0&&(te=3);let le,k,j,oe;if(Q){let re=Ji[Q];le=re.vertexShader,k=re.fragmentShader}else{le=x.vertexShader,k=x.fragmentShader;let re=o.getVertexShaderStage(x),Ee=o.getFragmentShaderStage(x);o.update(x,re,Ee),j=re.id,oe=Ee.id}let pe=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),Re=N.isInstancedMesh===!0,Ye=N.isBatchedMesh===!0,we=!!x.map,Fe=!!x.matcap,Ce=!!O,Pe=Ce&&O.isPMREMTexture===!0,st=!!x.aoMap,lt=!!x.lightMap,$=!!x.bumpMap&&x.wireframe===!1,et=!!x.normalMap,qt=!!x.displacementMap,vt=!!x.emissiveMap,at=!!x.metalnessMap,Ot=!!x.roughnessMap,Vt=x.anisotropy>0,B=x.clearcoat>0,ft=x.diffuseRoughness>0,ct=x.dispersion>0,He=x.retroreflectivity>0,ge=x.iridescence>0,ut=x.sheen>0,Ue=x.transmission>0,ze=Vt&&!!x.anisotropyMap,R=B&&!!x.clearcoatMap,M=B&&!!x.clearcoatNormalMap,W=B&&!!x.clearcoatRoughnessMap,he=ft&&!!x.diffuseRoughnessMap,se=ge&&!!x.iridescenceMap,me=ge&&!!x.iridescenceThicknessMap,ye=ut&&!!x.sheenColorMap,Y=ut&&!!x.sheenRoughnessMap,ne=!!x.specularMap,de=!!x.specularColorMap,D=!!x.specularIntensityMap,ee=Ue&&!!x.transmissionMap,K=Ue&&!!x.thicknessMap,_e=!!x.gradientMap,fe=!!x.alphaMap,xe=x.alphaTest>0,ue=!!x.alphaHash,ve=!!x.extensions,ae=Yi;x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ae=r.toneMapping);let ie=Pe?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Se={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:k,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:Ye,batchingColor:Ye&&N._colorsTexture!==null,instancing:Re,instancingColor:Re&&N.instanceColor!==null,instancingMorph:Re&&N.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:Fe,envMap:Ce,envMapMode:Ce&&O.mapping,envMapPMREM:Pe,envMapMaxLod:Pe?ie.length-1:null,envMapSize:Pe?ie[0].width:null,aoMap:st,lightMap:lt,bumpMap:$,normalMap:et,displacementMap:qt,emissiveMap:vt,normalMapObjectSpace:et&&x.normalMapType===km,normalMapTangentSpace:et&&x.normalMapType===Bh,packedNormalMap:et&&x.normalMapType===Bh&&jM(x.normalMap.format),metalnessMap:at,roughnessMap:Ot,anisotropy:Vt,anisotropyMap:ze,clearcoat:B,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:W,diffuseRoughness:ft,diffuseRoughnessMap:he,dispersion:ct,retroreflection:He,iridescence:ge,iridescenceMap:se,iridescenceThicknessMap:me,sheen:ut,sheenColorMap:ye,sheenRoughnessMap:Y,specularMap:ne,specularColorMap:de,specularIntensityMap:D,transmission:Ue,transmissionMap:ee,thicknessMap:K,gradientMap:_e,opaque:x.transparent===!1&&x.blending===ba&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:xe,alphaHash:ue,combine:x.combine,mapUv:we&&u(x.map.channel),aoMapUv:st&&u(x.aoMap.channel),lightMapUv:lt&&u(x.lightMap.channel),bumpMapUv:$&&u(x.bumpMap.channel),normalMapUv:et&&u(x.normalMap.channel),displacementMapUv:qt&&u(x.displacementMap.channel),emissiveMapUv:vt&&u(x.emissiveMap.channel),metalnessMapUv:at&&u(x.metalnessMap.channel),roughnessMapUv:Ot&&u(x.roughnessMap.channel),anisotropyMapUv:ze&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:se&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&u(x.sheenRoughnessMap.channel),specularMapUv:ne&&u(x.specularMap.channel),specularColorMapUv:de&&u(x.specularColorMap.channel),specularIntensityMapUv:D&&u(x.specularIntensityMap.channel),transmissionMapUv:ee&&u(x.transmissionMap.channel),thicknessMapUv:K&&u(x.thicknessMap.channel),alphaMapUv:fe&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(et||Vt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(we||fe),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&et===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:te,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(re=>re.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:vt&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qi,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let S=f[x.type],P;if(S){let C=Ji[S];P=jm.clone(C.uniforms)}else P=x.uniforms;return P}function b(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new KM(r,S,x,i),c.push(P),h.set(S,P)),P}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:A}}function tb(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function nb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function vg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,_,p,g){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},r[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),e++,v}function l(f,u,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let b=o(f,u,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function c(f,u,m,_,p,g){let v=o(f,u,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||nb),n.length>1&&n.sort(u||vg),i.length>1&&i.sort(u||vg)}function d(){for(let f=e,u=r.length;f<u;f++){let m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function ib(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new yg,r.set(n,[a])):i>=s.length?(a=new yg,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function rb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function sb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function ob(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lb(r){let e=new rb,t=sb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,s=new pt,a=new pt;function o(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,v=0,b=0,y=0,w=0,A=0,x=0,S=0,P=0,C=0;c.sort(ob);for(let L=0,z=c.length;L<z;L++){let I=c[L],G=I.color,X=I.intensity,O=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vr?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*X,d+=G.g*X,f+=G.b*X;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],X);C++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let E=I.shadow,V=t.get(I);V.shadowIntensity=E.intensity,V.shadowBias=E.bias,V.shadowNormalBias=E.normalBias,V.shadowRadius=E.radius,V.shadowMapSize.copy(E.mapSize).multiply(E.getFrameExtents()),n.sunShadow[m]=V,n.sunShadowMap[m]=Q;let te=E.getViewportCount();for(let le=0;le<te;le++)n.sunShadowMatrix[_+le]=E.getMatrix(le),n.sunShadowCascade[_+le]=E._cascadeData[le];_+=te,m++}n.sun[u]=q,u++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let E=I.shadow,V=t.get(I);V.shadowIntensity=E.intensity,V.shadowBias=E.bias,V.shadowNormalBias=E.normalBias,V.shadowRadius=E.radius,V.shadowMapSize=E.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=q,p++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(G).multiplyScalar(X),q.distance=O,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[v]=q;let E=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,E.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=E.matrix,I.castShadow){let V=t.get(I);V.shadowIntensity=E.intensity,V.shadowBias=E.bias,V.shadowNormalBias=E.normalBias,V.shadowRadius=E.radius,V.shadowMapSize=E.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=Q,x++}v++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(G).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=q,b++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let E=I.shadow,V=t.get(I);V.shadowIntensity=E.intensity,V.shadowBias=E.bias,V.shadowNormalBias=E.normalBias,V.shadowRadius=E.radius,V.shadowMapSize=E.mapSize,V.shadowCameraNear=E.camera.near,V.shadowCameraFar=E.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,A++}n.point[g]=q,g++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(X),q.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[y]=q,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==b||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==w||N.numPointShadows!==A||N.numSpotShadows!==x||N.numSpotMaps!==S||N.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=b,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=u,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=b,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=w,N.numPointShadows=A,N.numSpotShadows=x,N.numSpotMaps=S,N.numLightProbes=C,n.version=ab++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(y.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Sg(r){let e=new lb(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cb(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Sg(r),e.set(i,[o])):s>=a.length?(o=new Sg(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function pb(r,e,t){let n=new Ur,i=new Ge,s=new Ge,a=new Pt,o=new Bc,l=new zc,c={},h=t.maxTextureSize,d={[Gr]:On,[On]:Gr,[qi]:qi},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:hb,fragmentShader:ub}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new Kt;m.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Wt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let g=this.type;this.render=function(A,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===_m&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ho);let P=r.getRenderTarget(),C=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),L=r.state;L.setBlending(hs),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let z=g!==this.type;z&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=A.length;I<G;I++){let X=A[I],O=X.shadow;if(O===void 0){Be("WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let Q=O.getFrameExtents();i.multiply(Q),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,O.mapSize.y=s.y));let q=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=q,O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ma){if(X.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ii(i.x,i.y,{format:Vr,type:Ii,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),O.map.texture.name=X.name+".shadowMap",O.map.depthTexture=new fr(i.x,i.y,_i),O.map.depthTexture.name=X.name+".shadowMapDepth",O.map.depthTexture.format=hr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=hn,O.map.depthTexture.magFilter=hn}else X.isPointLight?(O.map=new el(i.x),O.map.depthTexture=new Po(i.x,Pi)):(O.map=new ii(i.x,i.y),O.map.depthTexture=new fr(i.x,i.y,Pi)),O.map.depthTexture.name=X.name+".shadowMap",O.map.depthTexture.format=hr,this.type===Ho?(O.map.depthTexture.compareFunction=q?Of:Uf,O.map.depthTexture.minFilter=Nn,O.map.depthTexture.magFilter=Nn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=hn,O.map.depthTexture.magFilter=hn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let E=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();X.isPointLight!==!0&&O.updateMatrices(X,S);let V=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let te=0;te<E;te++){let le=O.getCamera(te);if(X.isPointLight){let k=O.camera,j=O.matrix,oe=X.distance||k.far;oe!==k.far&&(k.far=oe,k.updateProjectionMatrix()),Qo.setFromMatrixPosition(X.matrixWorld),k.position.copy(Qo),Kf.copy(k.position),Kf.add(fb[te]),k.up.copy(db[te]),k.lookAt(Kf),k.updateMatrixWorld(),j.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Mg.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Mg,k.coordinateSystem,k.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,te),r.clear();else{te===0&&(r.setRenderTarget(O.map),r.clear());let k=O.getViewport(te);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),L.viewport(a)}n=O.getFrustum(te),y(x,S,le,X,V,this.type)}O.isPointLightShadow!==!0&&this.type===Ma&&v(O,S),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,C,N)};function v(A,x){let S=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new ii(i.x,i.y,{format:Vr,type:Ii}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(x,null,S,f,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(x,null,S,u,_,null)}function b(A,x,S,P){let C=null,N=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)C=N;else if(C=S.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=C.uuid,z=x.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let G=I[z];G===void 0&&(G=C.clone(),I[z]=G,x.addEventListener("dispose",w)),C=G}if(C.visible=x.visible,C.wireframe=x.wireframe,P===Ma?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=r.properties.get(C);L.light=S}return C}function y(A,x,S,P,C,N){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Ma)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let I=e.update(A),G=A.material;if(Array.isArray(G)){let X=I.groups;for(let O=0,Q=X.length;O<Q;O++){let q=X[O],E=G[q.materialIndex];if(E&&E.visible){let V=b(A,E,P,N);A.onBeforeShadow(r,A,x,S,I,V,q),r.renderBufferDirect(S,null,I,V,A,q),A.onAfterShadow(r,A,x,S,I,V,q)}}}else if(G.visible){let X=b(A,G,P,N);A.onBeforeShadow(r,A,x,S,I,X,null),r.renderBufferDirect(S,null,I,X,A,null),A.onAfterShadow(r,A,x,S,I,X,null)}}let z=A.children;for(let I=0,G=z.length;I<G;I++)y(z[I],x,S,P,C,N)}function w(A){A.target.removeEventListener("dispose",w);for(let S in c){let P=c[S],C=A.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function mb(r,e){function t(){let D=!1,ee=new Pt,K=null,_e=new Pt(0,0,0,0);return{setMask:function(fe){K!==fe&&!D&&(r.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){D=fe},setClear:function(fe,xe,ue,ve,ae){ae===!0&&(fe*=ve,xe*=ve,ue*=ve),ee.set(fe,xe,ue,ve),_e.equals(ee)===!1&&(r.clearColor(fe,xe,ue,ve),_e.copy(ee))},reset:function(){D=!1,K=null,_e.set(-1,0,0,0)}}}function n(){let D=!1,ee=!1,K=null,_e=null,fe=null;return{setReversed:function(xe){if(ee!==xe){let ue=e.get("EXT_clip_control");xe?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),ee=xe;let ve=fe;fe=null,this.setClear(ve)}},getReversed:function(){return ee},setTest:function(xe){xe?ce(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(xe){K!==xe&&!D&&(r.depthMask(xe),K=xe)},setFunc:function(xe){if(ee&&(xe=$m[xe]),_e!==xe){switch(xe){case vc:r.depthFunc(r.NEVER);break;case yc:r.depthFunc(r.ALWAYS);break;case Sc:r.depthFunc(r.LESS);break;case ra:r.depthFunc(r.LEQUAL);break;case Mc:r.depthFunc(r.EQUAL);break;case bc:r.depthFunc(r.GEQUAL);break;case Tc:r.depthFunc(r.GREATER);break;case wc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_e=xe}},setLocked:function(xe){D=xe},setClear:function(xe){fe!==xe&&(fe=xe,ee&&(xe=1-xe),r.clearDepth(xe))},reset:function(){D=!1,K=null,_e=null,fe=null,ee=!1}}}function i(){let D=!1,ee=null,K=null,_e=null,fe=null,xe=null,ue=null,ve=null,ae=null;return{setTest:function(ie){D||(ie?ce(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(ie){ee!==ie&&!D&&(r.stencilMask(ie),ee=ie)},setFunc:function(ie,Se,re){(K!==ie||_e!==Se||fe!==re)&&(r.stencilFunc(ie,Se,re),K=ie,_e=Se,fe=re)},setOp:function(ie,Se,re){(xe!==ie||ue!==Se||ve!==re)&&(r.stencilOp(ie,Se,re),xe=ie,ue=Se,ve=re)},setLocked:function(ie){D=ie},setClear:function(ie){ae!==ie&&(r.clearStencil(ie),ae=ie)},reset:function(){D=!1,ee=null,K=null,_e=null,fe=null,xe=null,ue=null,ve=null,ae=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,b=null,y=null,w=null,A=null,x=null,S=new Ve(0,0,0),P=0,C=!1,N=null,L=null,z=null,I=null,G=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Q=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=Q>=2);let E=null,V={},te=r.getParameter(r.SCISSOR_BOX),le=r.getParameter(r.VIEWPORT),k=new Pt().fromArray(te),j=new Pt().fromArray(le);function oe(D,ee,K,_e){let fe=new Uint8Array(4),xe=r.createTexture();r.bindTexture(D,xe),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ue=0;ue<K;ue++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(ee+ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return xe}let pe={};pe[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),a.setFunc(ra),$(!1),et(mf),ce(r.CULL_FACE),st(hs);function ce(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Re(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ye(D,ee){return f[D]!==ee?(r.bindFramebuffer(D,ee),f[D]=ee,D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ee),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function we(D,ee){let K=m,_e=!1;if(D){K=u.get(ee),K===void 0&&(K=[],u.set(ee,K));let fe=D.textures;if(K.length!==fe.length||K[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,ue=fe.length;xe<ue;xe++)K[xe]=r.COLOR_ATTACHMENT0+xe;K.length=fe.length,_e=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,_e=!0);_e&&r.drawBuffers(K)}function Fe(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let Ce={[us]:r.FUNC_ADD,[vm]:r.FUNC_SUBTRACT,[ym]:r.FUNC_REVERSE_SUBTRACT};Ce[Sm]=r.MIN,Ce[Mm]=r.MAX;let Pe={[bm]:r.ZERO,[Tm]:r.ONE,[wm]:r.SRC_COLOR,[vf]:r.SRC_ALPHA,[Im]:r.SRC_ALPHA_SATURATE,[Rm]:r.DST_COLOR,[Am]:r.DST_ALPHA,[Em]:r.ONE_MINUS_SRC_COLOR,[yf]:r.ONE_MINUS_SRC_ALPHA,[Pm]:r.ONE_MINUS_DST_COLOR,[Cm]:r.ONE_MINUS_DST_ALPHA,[Lm]:r.CONSTANT_COLOR,[Dm]:r.ONE_MINUS_CONSTANT_COLOR,[Nm]:r.CONSTANT_ALPHA,[Um]:r.ONE_MINUS_CONSTANT_ALPHA};function st(D,ee,K,_e,fe,xe,ue,ve,ae,ie){if(D===hs){p===!0&&(Re(r.BLEND),p=!1);return}if(p===!1&&(ce(r.BLEND),p=!0),D!==xm){if(D!==g||ie!==C){if((v!==us||w!==us)&&(r.blendEquation(r.FUNC_ADD),v=us,w=us),ie)switch(D){case ba:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gf:r.blendFunc(r.ONE,r.ONE);break;case _f:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ke("WebGLState: Invalid blending: ",D);break}else switch(D){case ba:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _f:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xf:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",D);break}b=null,y=null,A=null,x=null,S.set(0,0,0),P=0,g=D,C=ie}return}fe=fe||ee,xe=xe||K,ue=ue||_e,(ee!==v||fe!==w)&&(r.blendEquationSeparate(Ce[ee],Ce[fe]),v=ee,w=fe),(K!==b||_e!==y||xe!==A||ue!==x)&&(r.blendFuncSeparate(Pe[K],Pe[_e],Pe[xe],Pe[ue]),b=K,y=_e,A=xe,x=ue),(ve.equals(S)===!1||ae!==P)&&(r.blendColor(ve.r,ve.g,ve.b,ae),S.copy(ve),P=ae),g=D,C=!1}function lt(D,ee){D.side===qi?Re(r.CULL_FACE):ce(r.CULL_FACE);let K=D.side===On;ee&&(K=!K),$(K),D.blending===ba&&D.transparent===!1?st(hs):st(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let _e=D.stencilWrite;o.setTest(_e),_e&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){N!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),N=D)}function et(D){D!==mm?(ce(r.CULL_FACE),D!==L&&(D===mf?r.cullFace(r.BACK):D===gm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),L=D}function qt(D){D!==z&&(O&&r.lineWidth(D),z=D)}function vt(D,ee,K){D?(ce(r.POLYGON_OFFSET_FILL),(I!==ee||G!==K)&&(I=ee,G=K,a.getReversed()&&(ee=-ee,K=-K),r.polygonOffset(ee,K))):Re(r.POLYGON_OFFSET_FILL)}function at(D){D?ce(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function Ot(D){D===void 0&&(D=r.TEXTURE0+X-1),E!==D&&(r.activeTexture(D),E=D)}function Vt(D,ee,K){K===void 0&&(E===null?K=r.TEXTURE0+X-1:K=E);let _e=V[K];_e===void 0&&(_e={type:void 0,texture:void 0},V[K]=_e),(_e.type!==D||_e.texture!==ee)&&(E!==K&&(r.activeTexture(K),E=K),r.bindTexture(D,ee||pe[D]),_e.type=D,_e.texture=ee)}function B(){let D=V[E];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ft(){try{r.compressedTexImage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function ct(){try{r.compressedTexImage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function He(){try{r.texSubImage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function ge(){try{r.texSubImage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function ze(){try{r.texStorage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function R(){try{r.texStorage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function M(){try{r.texImage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function W(){try{r.texImage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function he(D){return d[D]!==void 0?d[D]:r.getParameter(D)}function se(D,ee){d[D]!==ee&&(r.pixelStorei(D,ee),d[D]=ee)}function me(D){k.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),k.copy(D))}function ye(D){j.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function Y(D,ee){let K=c.get(ee);K===void 0&&(K=new WeakMap,c.set(ee,K));let _e=K.get(D);_e===void 0&&(_e=r.getUniformBlockIndex(ee,D.name),r.uniformBlockBinding(ee,_e,_e),K.set(D,_e))}function ne(D,ee,K){let fe=c.get(ee).get(D);l[fe]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,fe,K),l[fe]=K)}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},E=null,V={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,b=null,y=null,w=null,A=null,x=null,S=new Ve(0,0,0),P=0,C=!1,N=null,L=null,z=null,I=null,G=null,k.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:Re,bindFramebuffer:Ye,drawBuffers:we,useProgram:Fe,setBlending:st,setMaterial:lt,setFlipSided:$,setCullFace:et,setLineWidth:qt,setPolygonOffset:vt,setScissorTest:at,activeTexture:Ot,bindTexture:Vt,unbindTexture:B,compressedTexImage2D:ft,compressedTexImage3D:ct,texImage2D:M,texImage3D:W,pixelStorei:se,getParameter:he,updateUBOMapping:Y,uniformBlockBinding:ne,texStorage2D:ze,texStorage3D:R,texSubImage2D:He,texSubImage3D:ge,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ue,scissor:me,viewport:ye,reset:de}}function gb(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):po("canvas")}function v(R,M,W){let he=1,se=ze(R);if((se.width>W||se.height>W)&&(he=W/Math.max(se.width,se.height)),he<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let me=Math.floor(he*se.width),ye=Math.floor(he*se.height);f===void 0&&(f=g(me,ye));let Y=M?g(me,ye):f;return Y.width=me,Y.height=ye,Y.getContext("2d").drawImage(R,0,0,me,ye),Be("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+me+"x"+ye+")."),Y}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function b(R){return R.generateMipmaps}function y(R){r.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(R,M,W,he,se,me=!1){if(R!==null){if(r[R]!==void 0)return r[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ye;he&&(ye=e.get("EXT_texture_norm16"),ye||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===r.RED&&(W===r.FLOAT&&(Y=r.R32F),W===r.HALF_FLOAT&&(Y=r.R16F),W===r.UNSIGNED_BYTE&&(Y=r.R8),W===r.UNSIGNED_SHORT&&ye&&(Y=ye.R16_EXT),W===r.SHORT&&ye&&(Y=ye.R16_SNORM_EXT)),M===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(Y=r.R8UI),W===r.UNSIGNED_SHORT&&(Y=r.R16UI),W===r.UNSIGNED_INT&&(Y=r.R32UI),W===r.BYTE&&(Y=r.R8I),W===r.SHORT&&(Y=r.R16I),W===r.INT&&(Y=r.R32I)),M===r.RG&&(W===r.FLOAT&&(Y=r.RG32F),W===r.HALF_FLOAT&&(Y=r.RG16F),W===r.UNSIGNED_BYTE&&(Y=r.RG8),W===r.UNSIGNED_SHORT&&ye&&(Y=ye.RG16_EXT),W===r.SHORT&&ye&&(Y=ye.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(Y=r.RG8UI),W===r.UNSIGNED_SHORT&&(Y=r.RG16UI),W===r.UNSIGNED_INT&&(Y=r.RG32UI),W===r.BYTE&&(Y=r.RG8I),W===r.SHORT&&(Y=r.RG16I),W===r.INT&&(Y=r.RG32I)),M===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),W===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),W===r.UNSIGNED_INT&&(Y=r.RGB32UI),W===r.BYTE&&(Y=r.RGB8I),W===r.SHORT&&(Y=r.RGB16I),W===r.INT&&(Y=r.RGB32I)),M===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),W===r.UNSIGNED_INT&&(Y=r.RGBA32UI),W===r.BYTE&&(Y=r.RGBA8I),W===r.SHORT&&(Y=r.RGBA16I),W===r.INT&&(Y=r.RGBA32I)),M===r.RGB&&(W===r.UNSIGNED_SHORT&&ye&&(Y=ye.RGB16_EXT),W===r.SHORT&&ye&&(Y=ye.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),M===r.RGBA){let ne=me?fo:rt.getTransfer(se);W===r.FLOAT&&(Y=r.RGBA32F),W===r.HALF_FLOAT&&(Y=r.RGBA16F),W===r.UNSIGNED_BYTE&&(Y=ne===gt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&ye&&(Y=ye.RGBA16_EXT),W===r.SHORT&&ye&&(Y=ye.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(R,M){let W;return R?M===null||M===Pi||M===ds?W=r.DEPTH24_STENCIL8:M===_i?W=r.DEPTH32F_STENCIL8:M===wa&&(W=r.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===ds?W=r.DEPTH_COMPONENT24:M===_i?W=r.DEPTH_COMPONENT32F:M===wa&&(W=r.DEPTH_COMPONENT16),W}function S(R,M){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){let M=new WeakRef(R);n.get(R).__ref=M,m.add(M),_.register(R,M,M)}function C(R){let M=n.get(R).__ref;M!==void 0&&(m.delete(M),_.unregister(M))}function N(R){z(R.target)}function L(R){I(R.target)}function z(R){R.removeEventListener("dispose",N),C(R),X(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",L),C(R),Q(R)}function G(){for(let R of m){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):z(M))}m.clear(),d.clear()}function X(R){let M=n.get(R);if(M.__webglInit===void 0)return;let W=R.source,he=u.get(W);if(he){let se=he[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(R),Object.keys(he).length===0&&u.delete(W)}n.remove(R)}function O(R){let M=n.get(R);r.deleteTexture(M.__webglTexture);let W=R.source,he=u.get(W);delete he[M.__cacheKey],a.memory.textures--}function Q(R){let M=n.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let W=R.depthTexture;if(W&&W.renderTarget===R&&z(W),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let me=0;me<M.__webglFramebuffer[se].length;me++)r.deleteFramebuffer(M.__webglFramebuffer[se][me]);else r.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)r.deleteFramebuffer(M.__webglFramebuffer[se]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let he=R.textures;for(let se=0,me=he.length;se<me;se++){let ye=n.get(he[se]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(he[se])}n.remove(R)}let q=0;function E(){q=0}function V(){return q}function te(R){q=R}function le(){let R=q;return R>=i.maxTextures&&Be("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,R}function k(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function j(R,M){let W=n.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let he=R.image;if(he===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(W,R,M);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+M)}function oe(R,M){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){lt(W,R,M);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+M)}function pe(R,M){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){lt(W,R,M);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+M)}function ce(R,M){let W=n.get(R);if(R.version>0&&W.__version!==R.version){$(W,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+M)}let Re={[Ec]:r.REPEAT,[zi]:r.CLAMP_TO_EDGE,[Ac]:r.MIRRORED_REPEAT},Ye={[hn]:r.NEAREST,[Bm]:r.NEAREST_MIPMAP_NEAREST,[Xo]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[eh]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},we={[Vm]:r.NEVER,[Ff]:r.ALWAYS,[Hm]:r.LESS,[Uf]:r.LEQUAL,[Wm]:r.EQUAL,[Of]:r.GEQUAL,[Xm]:r.GREATER,[qm]:r.NOTEQUAL};function Fe(R,M){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===eh||M.magFilter===Xo||M.magFilter===pr||M.minFilter===Nn||M.minFilter===eh||M.minFilter===Xo||M.minFilter===pr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Re[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Re[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Re[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Ye[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Ye[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==Xo&&M.minFilter!==pr||M.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",N),P(M));let he=M.source,se=u.get(he);se===void 0&&(se={},u.set(he,se));let me=k(M);if(me!==R.__cacheKey){se[me]===void 0&&(se[me]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),se[me].usedTimes++;let ye=se[R.__cacheKey];ye!==void 0&&(se[R.__cacheKey].usedTimes--,ye.usedTimes===0&&O(M)),R.__cacheKey=me,R.__webglTexture=se[me].texture}return W}function Pe(R,M,W){return Math.floor(Math.floor(R/W)/M)}function st(R,M,W,he){let me=R.updateRanges;if(me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,W,he,M.data);else{me.sort((D,ee)=>D.start-ee.start);let ye=0;for(let D=1;D<me.length;D++){let ee=me[ye],K=me[D],_e=ee.start+ee.count,fe=Pe(K.start,M.width,4),xe=Pe(ee.start,M.width,4);K.start<=_e+1&&fe===xe&&Pe(K.start+K.count-1,M.width,4)===fe?ee.count=Math.max(ee.count,K.start+K.count-ee.start):(++ye,me[ye]=K)}me.length=ye+1;let Y=t.getParameter(r.UNPACK_ROW_LENGTH),ne=t.getParameter(r.UNPACK_SKIP_PIXELS),de=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let D=0,ee=me.length;D<ee;D++){let K=me[D],_e=Math.floor(K.start/4),fe=Math.ceil(K.count/4),xe=_e%M.width,ue=Math.floor(_e/M.width),ve=fe,ae=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(r.UNPACK_SKIP_ROWS,ue),t.texSubImage2D(r.TEXTURE_2D,0,xe,ue,ve,ae,W,he,M.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Y),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function lt(R,M,W){let he=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=r.TEXTURE_3D);let se=Ce(R,M),me=M.source;t.bindTexture(he,R.__webglTexture,r.TEXTURE0+W);let ye=n.get(me);if(me.version!==ye.__version||se===!0){if(t.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ae=rt.getPrimaries(rt.workingColorSpace),ie=M.colorSpace===gr?null:rt.getPrimaries(M.colorSpace),Se=M.colorSpace===gr||ae===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=v(M.image,!1,i.maxTextureSize);ne=Ue(M,ne);let de=s.convert(M.format,M.colorSpace),D=s.convert(M.type),ee=A(M.internalFormat,de,D,M.normalized,M.colorSpace,M.isVideoTexture);Fe(he,M);let K,_e=M.mipmaps,fe=M.isVideoTexture!==!0,xe=ye.__version===void 0||se===!0,ue=me.dataReady,ve=S(M,ne);if(M.isDepthTexture)ee=x(M.format===mr,M.type),xe&&(fe?t.texStorage2D(r.TEXTURE_2D,1,ee,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,ee,ne.width,ne.height,0,de,D,null));else if(M.isDataTexture)if(_e.length>0){fe&&xe&&t.texStorage2D(r.TEXTURE_2D,ve,ee,_e[0].width,_e[0].height);for(let ae=0,ie=_e.length;ae<ie;ae++)K=_e[ae],fe?ue&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,K.width,K.height,de,D,K.data):t.texImage2D(r.TEXTURE_2D,ae,ee,K.width,K.height,0,de,D,K.data);M.generateMipmaps=!1}else fe?(xe&&t.texStorage2D(r.TEXTURE_2D,ve,ee,ne.width,ne.height),ue&&st(M,ne,de,D)):t.texImage2D(r.TEXTURE_2D,0,ee,ne.width,ne.height,0,de,D,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,ee,_e[0].width,_e[0].height,ne.depth);for(let ae=0,ie=_e.length;ae<ie;ae++)if(K=_e[ae],M.format!==Li)if(de!==null)if(fe){if(ue)if(M.layerUpdates.size>0){let Se=Zf(K.width,K.height,M.format,M.type);for(let re of M.layerUpdates){let Ee=K.data.subarray(re*Se/K.data.BYTES_PER_ELEMENT,(re+1)*Se/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,re,K.width,K.height,1,de,Ee)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,K.width,K.height,ne.depth,de,K.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,ee,K.width,K.height,ne.depth,0,K.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?ue&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,K.width,K.height,ne.depth,de,D,K.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,ee,K.width,K.height,ne.depth,0,de,D,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{fe&&xe&&t.texStorage2D(r.TEXTURE_2D,ve,ee,_e[0].width,_e[0].height);for(let ae=0,ie=_e.length;ae<ie;ae++)K=_e[ae],M.format!==Li?de!==null?fe?ue&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,K.width,K.height,de,K.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,ee,K.width,K.height,0,K.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?ue&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,K.width,K.height,de,D,K.data):t.texImage2D(r.TEXTURE_2D,ae,ee,K.width,K.height,0,de,D,K.data)}else if(M.isDataArrayTexture)if(fe){if(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,ee,ne.width,ne.height,ne.depth),ue)if(M.layerUpdates.size>0){let ae=Zf(ne.width,ne.height,M.format,M.type);for(let ie of M.layerUpdates){let Se=ne.data.subarray(ie*ae/ne.data.BYTES_PER_ELEMENT,(ie+1)*ae/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,ne.width,ne.height,1,de,D,Se)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,D,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ee,ne.width,ne.height,ne.depth,0,de,D,ne.data);else if(M.isData3DTexture)fe?(xe&&t.texStorage3D(r.TEXTURE_3D,ve,ee,ne.width,ne.height,ne.depth),ue&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,D,ne.data)):t.texImage3D(r.TEXTURE_3D,0,ee,ne.width,ne.height,ne.depth,0,de,D,ne.data);else if(M.isFramebufferTexture){if(xe)if(fe)t.texStorage2D(r.TEXTURE_2D,ve,ee,ne.width,ne.height);else{let ae=ne.width,ie=ne.height;for(let Se=0;Se<ve;Se++)t.texImage2D(r.TEXTURE_2D,Se,ee,ae,ie,0,de,D,null),ae>>=1,ie>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let ae=r.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ne.parentNode!==ae){ae.appendChild(ne),d.add(M),ae.onpaint=ie=>{let Se=ie.changedElements;for(let re of d)Se.includes(re.image)&&(re.needsUpdate=!0)},ae.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ne);else{let Se=r.RGBA,re=r.RGBA,Ee=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Se,re,Ee,ne)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(_e.length>0){if(fe&&xe){let ae=ze(_e[0]);t.texStorage2D(r.TEXTURE_2D,ve,ee,ae.width,ae.height)}for(let ae=0,ie=_e.length;ae<ie;ae++)K=_e[ae],fe?ue&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,de,D,K):t.texImage2D(r.TEXTURE_2D,ae,ee,de,D,K);M.generateMipmaps=!1}else if(fe){if(xe){let ae=ze(ne);t.texStorage2D(r.TEXTURE_2D,ve,ee,ae.width,ae.height)}ue&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,D,ne)}else t.texImage2D(r.TEXTURE_2D,0,ee,de,D,ne);b(M)&&M.mipmapsAutoUpdate===!0&&y(he),ye.__version=me.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function $(R,M,W){if(M.image.length!==6)return;let he=Ce(R,M),se=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);let me=n.get(se);if(se.version!==me.__version||he===!0){t.activeTexture(r.TEXTURE0+W);let ye=rt.getPrimaries(rt.workingColorSpace),Y=M.colorSpace===gr?null:rt.getPrimaries(M.colorSpace),ne=M.colorSpace===gr||ye===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let re=0;re<6;re++)!de&&!D?ee[re]=v(M.image[re],!0,i.maxCubemapSize):ee[re]=D?M.image[re].image:M.image[re],ee[re]=Ue(M,ee[re]);let K=ee[0],_e=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),xe=A(M.internalFormat,_e,fe,M.normalized,M.colorSpace),ue=M.isVideoTexture!==!0,ve=me.__version===void 0||he===!0,ae=se.dataReady,ie=S(M,K);Fe(r.TEXTURE_CUBE_MAP,M);let Se;if(M.isDepthTexture){if(xe=x(M.format===mr,M.type),ve)if(ue)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,xe,K.width,K.height);else for(let re=0;re<6;re++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,xe,K.width,K.height,0,_e,fe,null)}else if(de){ue&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,xe,K.width,K.height);for(let re=0;re<6;re++){Se=ee[re].mipmaps;for(let Ee=0;Ee<Se.length;Ee++){let tt=Se[Ee];M.format!==Li?_e!==null?ue?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,tt.width,tt.height,_e,tt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,xe,tt.width,tt.height,0,tt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,tt.width,tt.height,_e,fe,tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,xe,tt.width,tt.height,0,_e,fe,tt.data)}}}else{if(Se=M.mipmaps,ue&&ve){Se.length>0&&ie++;let re=ze(ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,xe,re.width,re.height)}for(let re=0;re<6;re++)if(D){ue?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ee[re].width,ee[re].height,_e,fe,ee[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,xe,ee[re].width,ee[re].height,0,_e,fe,ee[re].data);for(let Ee=0;Ee<Se.length;Ee++){let Xe=Se[Ee].image[re].image;ue?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,Xe.width,Xe.height,_e,fe,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,xe,Xe.width,Xe.height,0,_e,fe,Xe.data)}}else{ue?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,_e,fe,ee[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,xe,_e,fe,ee[re]);for(let Ee=0;Ee<Se.length;Ee++){let tt=Se[Ee];ue?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,_e,fe,tt.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,xe,_e,fe,tt.image[re])}}}b(M)&&M.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),me.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function et(R,M,W,he,se,me){let ye=s.convert(W.format,W.colorSpace),Y=s.convert(W.type),ne=A(W.internalFormat,ye,Y,W.normalized,W.colorSpace),de=n.get(M),D=n.get(W);if(D.__renderTarget=M,!de.__hasExternalTextures){let ee=Math.max(1,M.width>>me),K=Math.max(1,M.height>>me);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,me,ne,ee,K,M.depth,0,ye,Y,null):t.texImage2D(se,me,ne,ee,K,0,ye,Y,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ge(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,se,D.__webglTexture,0,He(M)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,se,D.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(R,M,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){let he=M.depthTexture,se=he&&he.isDepthTexture?he.type:null,me=x(M.stencilBuffer,se),ye=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ge(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He(M),me,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,He(M),me,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,me,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{let he=M.textures;for(let se=0;se<he.length;se++){let me=he[se],ye=s.convert(me.format,me.colorSpace),Y=s.convert(me.type),ne=A(me.internalFormat,ye,Y,me.normalized,me.colorSpace);ge(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He(M),ne,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,He(M),ne,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ne,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(R,M,W){let he=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(M.depthTexture);se.__renderTarget=M;let me=he?M.depthTexture.image[0]:M.depthTexture.image;(!se.__webglTexture||me.width!==M.width||me.height!==M.height)&&(me.width=M.width,me.height=M.height,M.depthTexture.needsUpdate=!0),he?ce(M.depthTexture,0):j(M.depthTexture,0);let ye=se.__webglTexture,Y=He(M),ne=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,de=M.depthTexture.format===mr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===hr)ge(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ne,ye,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,de,ne,ye,0);else if(M.depthTexture.format===mr)ge(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ne,ye,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,de,ne,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(R){let M=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let he=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){let se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",se)};he.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=he}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)vt(M.__webglFramebuffer[he],R,he);else R.texture.mipmaps.length>0?vt(M.__webglFramebuffer[0],R,0):vt(M.__webglFramebuffer,R,0);else if(W){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=r.createRenderbuffer(),qt(M.__webglDepthbuffer[he],R,!1);else{let se=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,me)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),qt(M.__webglDepthbuffer,R,!1);else{let se=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,me)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(R,M,W){let he=n.get(R);M!==void 0&&et(he.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&at(R)}function Vt(R){let M=R.texture,W=n.get(R),he=n.get(M);R.addEventListener("dispose",L),P(R);let se=R.textures,me=R.isWebGLCubeRenderTarget===!0,ye=se.length>1;if(ye||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=M.version,a.memory.textures++),me){W.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){W.__webglFramebuffer[Y]=[];for(let ne=0;ne<M.mipmaps.length;ne++)W.__webglFramebuffer[Y][ne]=r.createFramebuffer()}else W.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)W.__webglFramebuffer[Y]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ye)for(let Y=0,ne=se.length;Y<ne;Y++){let de=n.get(se[Y]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Y=0;Y<se.length;Y++){let ne=se[Y];W.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Y]);let de=s.convert(ne.format,ne.colorSpace),D=s.convert(ne.type),ee=A(ne.internalFormat,de,D,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),K=He(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,ee,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,W.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)et(W.__webglFramebuffer[Y][ne],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne);else et(W.__webglFramebuffer[Y],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(M)?y(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let Y=0,ne=se.length;Y<ne;Y++){let de=se[Y],D=n.get(de),ee=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,D.__webglTexture),Fe(ee,de),et(W.__webglFramebuffer,R,de,r.COLOR_ATTACHMENT0+Y,ee,0),b(de)&&y(ee)}t.unbindTexture()}else{let Y=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Y,he.__webglTexture),Fe(Y,M),M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)et(W.__webglFramebuffer[ne],R,M,r.COLOR_ATTACHMENT0,Y,ne);else et(W.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,Y,0);b(M)?y(Y):M.mipmaps.length>0&&r.texParameteri(Y,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&at(R)}function B(R){let M=R.textures;for(let W=0,he=M.length;W<he;W++){let se=M[W];if(b(se)&&se.mipmapsAutoUpdate===!0){let me=w(R),ye=n.get(se).__webglTexture;t.bindTexture(me,ye),y(me),t.unbindTexture()}}}let ft=[];function ct(R){if(R.samples>0){if(ge(R)===!1){let M=R.textures,W=R.width,he=R.height,se=r.COLOR_BUFFER_BIT,me=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),Y=M.length>1;if(Y)for(let de=0;de<M.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let de=0;de<M.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);let D=n.get(M[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,W,he,0,0,W,he,se,r.NEAREST),l===!0&&(ft.length=0,ft.push(r.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ft.push(me),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let de=0;de<M.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);let D=n.get(M[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,D,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function He(R){return Math.min(i.maxSamples,R.samples)}function ge(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Ue(R,M){let W=R.colorSpace,he=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==uo&&W!==gr&&(rt.getTransfer(W)===gt?(he!==Li||se!==qn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",W)),M}function ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=E,this.getTextureUnits=V,this.setTextureUnits=te,this.setTexture2D=j,this.setTexture2DArray=oe,this.setTexture3D=pe,this.setTextureCube=ce,this.rebindTextures=Ot,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ge,this.dispose=G}function _b(r,e){function t(n,i=gr){let s,a=rt.getTransfer(i);if(n===qn)return r.UNSIGNED_BYTE;if(n===nh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return r.UNSIGNED_SHORT_5_5_5_1;if(n===If)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rf)return r.BYTE;if(n===Pf)return r.SHORT;if(n===wa)return r.UNSIGNED_SHORT;if(n===th)return r.INT;if(n===Pi)return r.UNSIGNED_INT;if(n===_i)return r.FLOAT;if(n===Ii)return r.HALF_FLOAT;if(n===Df)return r.ALPHA;if(n===Nf)return r.RGB;if(n===Li)return r.RGBA;if(n===hr)return r.DEPTH_COMPONENT;if(n===mr)return r.DEPTH_STENCIL;if(n===rh)return r.RED;if(n===sh)return r.RED_INTEGER;if(n===Vr)return r.RG;if(n===ah)return r.RG_INTEGER;if(n===oh)return r.RGBA_INTEGER;if(n===qo||n===Yo||n===Zo||n===Jo)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lh||n===ch||n===hh||n===uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ch)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fh||n===dh||n===ph||n===mh||n===gh||n===$o||n===_h)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fh||n===dh)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ph)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===mh)return s.COMPRESSED_R11_EAC;if(n===gh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$o)return s.COMPRESSED_RG11_EAC;if(n===_h)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xh||n===vh||n===yh||n===Sh||n===Mh||n===bh||n===Th||n===wh||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Th)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ah)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ch)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rh)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ih)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lh||n===Dh||n===Nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Lh)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===Oh||n===Ko||n===Fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}function Sb(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Xf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===On&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===On&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),b=v.envMap,y=v.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(yb.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Dg),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mb(r,e,t,n){let i={},s={};function a(v,b){let y=b.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,b){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let w=b.program;n.updateUBOMapping(v,w);let A=e.render.frame;s[v.id]!==A&&(c(v),s[v.id]=A)}function l(v){let b=r.createBuffer(),y=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,y,w),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function c(v){let b=i[v.id],y=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let A=0,x=y.length;A<x;A++){let S=y[A];if(Array.isArray(S))for(let P=0,C=S.length;P<C;P++)h(S[P],A,P,w);else h(S,A,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,b,y,w){if(f(v,b,y,w)===!0){let A=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let C=x[P],N=_(C,!0);d(C,v.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,v.__data)}}function d(v,b,y){typeof v=="number"||typeof v=="boolean"?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function f(v,b,y,w){let A=v.value,x=b+"_"+y;if(Array.isArray(A)){w[x]===void 0&&(w[x]=[]);let S=w[x],P=!1;for(let C=0;C<A.length;C++)u(A[C],S,C)===!0&&(P=!0);return P}return u(A,w,x)}function u(v,b,y){if(b[y]===void 0)return typeof v=="number"||typeof v=="boolean"?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let w=b[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(v){let b=v.uniforms,y=0,w=16;for(let x=0,S=b.length;x<S;x++){let P=Array.isArray(b[x])?b[x]:[b[x]];for(let C=0,N=P.length;C<N;C++){let L=P[C],z=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(b[x])||Array.isArray(L.value),G=y;for(let O=0,Q=z.length;O<Q;O++){let q=z[O],E=_(q,I),V=y%w,te=V%E.boundary,le=V+te;y+=te,le!==0&&w-le<E.storage&&(y+=w-le),O===0&&(G=y),y+=E.storage}let X=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new X((y-G)/Float32Array.BYTES_PER_ELEMENT),L.__offset=G}}let A=y%w;return A>0&&(y+=w-A),v.__size=y,v.__cache={},this}function _(v,b){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let b=v.target;b.removeEventListener("dispose",p),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}function Tb(){return Zi===null&&(Zi=new To(bb,16,16,Vr,Ii),Zi.name="DFG_LUT",Zi.minFilter=Nn,Zi.magFilter=Nn,Zi.wrapS=zi,Zi.wrapT=zi,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}var Gx,Vx,Hx,Wx,Xx,qx,Yx,Zx,Jx,$x,Kx,Qx,jx,ev,tv,nv,iv,rv,sv,av,ov,lv,cv,hv,uv,fv,dv,pv,mv,gv,_v,xv,vv,yv,Sv,Mv,bv,Tv,wv,Ev,Av,Cv,Rv,Pv,Iv,Lv,Dv,Nv,Uv,Ov,Fv,Bv,zv,kv,Gv,Vv,Hv,Wv,Xv,qv,Yv,Zv,Jv,$v,Kv,Qv,jv,ey,ty,ny,iy,ry,sy,ay,oy,ly,cy,hy,uy,fy,dy,py,my,gy,_y,xy,vy,yy,Sy,My,by,Ty,wy,Ey,Ay,Cy,Ry,Py,Iy,Ly,Dy,Ny,Uy,Oy,Fy,By,zy,ky,Gy,Vy,Hy,Wy,Xy,qy,Yy,Zy,Jy,$y,Ky,Qy,jy,eS,tS,nS,iS,rS,sS,aS,oS,lS,cS,hS,uS,fS,dS,pS,mS,gS,_S,xS,vS,Je,Te,Ji,kh,yS,Tg,el,ng,ES,AS,wg,Eg,CS,RS,PS,Vh,GS,Ag,Cg,Rg,Pg,Ig,Lg,ag,og,lg,cg,hg,Qf,jf,ed,$f,Aa,PM,IM,dg,UM,Gh,GM,HM,XM,YM,JM,QM,nd,id,ab,hb,ub,fb,db,Mg,Qo,Kf,xb,vb,rd,sd,yb,Dg,bb,Zi,Hh,ad=Rr(()=>{Jf();Jf();Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ev=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Lv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$v=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ey=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ay=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ry=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ny=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Gx,alphahash_pars_fragment:Vx,alphamap_fragment:Hx,alphamap_pars_fragment:Wx,alphatest_fragment:Xx,alphatest_pars_fragment:qx,aomap_fragment:Yx,aomap_pars_fragment:Zx,batching_pars_vertex:Jx,batching_vertex:$x,begin_vertex:Kx,beginnormal_vertex:Qx,bsdfs:jx,iridescence_fragment:ev,bumpmap_pars_fragment:tv,clipping_planes_fragment:nv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:rv,clipping_planes_vertex:sv,color_fragment:av,color_pars_fragment:ov,color_pars_vertex:lv,color_vertex:cv,common:hv,defaultnormal_vertex:uv,displacementmap_pars_vertex:fv,displacementmap_vertex:dv,emissivemap_fragment:pv,emissivemap_pars_fragment:mv,colorspace_fragment:gv,colorspace_pars_fragment:_v,envmap_fragment:xv,envmap_common_pars_fragment:vv,envmap_pars_fragment:yv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Lv,envmap_vertex:Mv,fog_vertex:bv,fog_pars_vertex:Tv,fog_fragment:wv,fog_pars_fragment:Ev,gradientmap_pars_fragment:Av,lightmap_pars_fragment:Cv,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Pv,lights_pars_begin:Iv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Nv,lights_phong_fragment:Uv,lights_phong_pars_fragment:Ov,lights_physical_fragment:Fv,lights_physical_pars_fragment:Bv,lights_fragment_begin:zv,lights_fragment_maps:kv,lights_fragment_end:Gv,lightprobes_pars_fragment:Vv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:qv,map_fragment:Yv,map_pars_fragment:Zv,map_particle_fragment:Jv,map_particle_pars_fragment:$v,metalnessmap_fragment:Kv,metalnessmap_pars_fragment:Qv,morphinstance_vertex:jv,morphcolor_vertex:ey,morphnormal_vertex:ty,morphtarget_pars_vertex:ny,morphtarget_vertex:iy,normal_fragment_begin:ry,normal_fragment_maps:sy,normal_pars_fragment:ay,normal_pars_vertex:oy,normal_vertex:ly,normalmap_pars_fragment:cy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:uy,clearcoat_pars_fragment:fy,iridescence_pars_fragment:dy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:_y,dithering_fragment:xy,dithering_pars_fragment:vy,roughnessmap_fragment:yy,roughnessmap_pars_fragment:Sy,shadowmap_pars_fragment:My,shadowmap_pars_vertex:by,shadowmap_vertex:Ty,shadowmask_pars_fragment:wy,skinbase_vertex:Ey,skinning_pars_vertex:Ay,skinning_vertex:Cy,skinnormal_vertex:Ry,specularmap_fragment:Py,specularmap_pars_fragment:Iy,tonemapping_fragment:Ly,tonemapping_pars_fragment:Dy,transmission_fragment:Ny,transmission_pars_fragment:Uy,uv_pars_fragment:Oy,uv_pars_vertex:Fy,uv_vertex:By,worldpos_vertex:zy,background_vert:ky,background_frag:Gy,backgroundCube_vert:Vy,backgroundCube_frag:Hy,cube_vert:Wy,cube_frag:Xy,depth_vert:qy,depth_frag:Yy,distance_vert:Zy,distance_frag:Jy,equirect_vert:$y,equirect_frag:Ky,linedashed_vert:Qy,linedashed_frag:jy,meshbasic_vert:eS,meshbasic_frag:tS,meshlambert_vert:nS,meshlambert_frag:iS,meshmatcap_vert:rS,meshmatcap_frag:sS,meshnormal_vert:aS,meshnormal_frag:oS,meshphong_vert:lS,meshphong_frag:cS,meshphysical_vert:hS,meshphysical_frag:uS,meshtoon_vert:fS,meshtoon_frag:dS,points_vert:pS,points_frag:mS,shadow_vert:gS,shadow_frag:_S,sprite_vert:xS,sprite_frag:vS},Te={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ji={basic:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:bn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:bn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:bn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:bn([Te.points,Te.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:bn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:bn([Te.common,Te.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:bn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:bn([Te.sprite,Te.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:bn([Te.common,Te.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:bn([Te.lights,Te.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ji.physical={uniforms:bn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};kh={r:0,b:0,g:0},yS=new pt,Tg=new We;Tg.set(-1,0,0,0,1,0,0,0,1);el=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Co(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new dr(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:hs});s.uniforms.tEquirect.value=t;let a=new Wt(i,s),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=Nn),new Sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},ng=256,ES=3,AS=20,wg=256,Eg=16,CS=3,RS=new F,PS=new Ve,Vh=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sa(1,10,null),this._boxMesh=new Wt(new dr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=RS}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(PS));let p=new Sa(n,i,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ng,Gf(e))}_fromTexture(e,t){e.mapping===fs||e.mapping===Ta?this._setSize(e.image.length===0?ng:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ig(e,!1,!1),n=Math.log2(e)-ES;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ig(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fs||e.mapping===Ta?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=IS(),this._integrationMaterial=LS());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Eg);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-CS)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(wg*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=DS());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};GS={[Mf]:"LINEAR_TONE_MAPPING",[bf]:"REINHARD_TONE_MAPPING",[Tf]:"CINEON_TONE_MAPPING",[Wo]:"ACES_FILMIC_TONE_MAPPING",[Ef]:"AGX_TONE_MAPPING",[Af]:"NEUTRAL_TONE_MAPPING",[wf]:"CUSTOM_TONE_MAPPING"};Ag=new Un,Cg=new fr(1,1),Rg=new Po(1),Pg=new go,Ig=new Ic,Lg=new Co,ag=[],og=[],lg=new Float32Array(16),cg=new Float32Array(9),hg=new Float32Array(4);Qf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lM(t.type)}},jf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CM(t.type)}},ed=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},$f=/(\w+)(\])?(\[|\.)?/g;Aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);RM(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};PM=37297,IM=0;dg=new We;UM={[Mf]:"Linear",[bf]:"Reinhard",[Tf]:"Cineon",[Wo]:"ACESFilmic",[Ef]:"AgX",[Af]:"Neutral",[wf]:"Custom"};Gh=new F;GM=/^[ \t]*#include +<([\w\d./]+)>/gm;HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;XM={[Ho]:"SHADOWMAP_TYPE_PCF",[Ma]:"SHADOWMAP_TYPE_VSM"};YM={[Ta]:"ENVMAP_MODE_REFRACTION"};JM={[Sf]:"ENVMAP_BLENDING_MULTIPLY",[Om]:"ENVMAP_BLENDING_MIX",[Fm]:"ENVMAP_BLENDING_ADD"};QM=0,nd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new id(e),t.set(e,n)),n}},id=class{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}};ab=0;hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fb=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],db=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Mg=new pt,Qo=new F,Kf=new F;xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xi({vertexShader:xb,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new No(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sd=class extends ki{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding<"u",p=new rd,g={},v=t.getContextAttributes(),b=null,y=null,w=[],A=[],x=new Ge,S=null,P=null,C=new Dn;C.viewport=new Pt;let N=new Dn;N.viewport=new Pt;let L=[C,N],z=new Kc,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=w[k];return j===void 0&&(j=new ca,w[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=w[k];return j===void 0&&(j=new ca,w[k]=j),j.getGripSpace()},this.getHand=function(k){let j=w[k];return j===void 0&&(j=new ca,w[k]=j),j.getHandSpace()};function X(k){let j=A.indexOf(k.inputSource);if(j===-1)return;let oe=w[j];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||a),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",Q);for(let k=0;k<w.length;k++){let j=A[k];j!==null&&(A[k]=null,w[k].disconnect(j))}I=null,G=null,p.reset();for(let k in g)delete g[k];if(e.setRenderTarget(b),u=null,f=null,d=null,i=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),P!==null){let k=P.camera;k.fov=P.fov,k.zoom=P.zoom,k.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",O),i.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,pe=null,ce=null;v.depth&&(ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?mr:hr,pe=v.stencil?ds:Pi);let Re={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Re),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ii(f.textureWidth,f.textureHeight,{format:Li,type:qn,depthTexture:new fr(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let oe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ii(u.framebufferWidth,u.framebufferHeight,{format:Li,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(k){for(let j=0;j<k.removed.length;j++){let oe=k.removed[j],pe=A.indexOf(oe);pe>=0&&(A[pe]=null,w[pe].disconnect(oe))}for(let j=0;j<k.added.length;j++){let oe=k.added[j],pe=A.indexOf(oe);if(pe===-1){for(let Re=0;Re<w.length;Re++)if(Re>=A.length){A.push(oe),pe=Re;break}else if(A[Re]===null){A[Re]=oe,pe=Re;break}if(pe===-1)break}let ce=w[pe];ce&&ce.connect(oe)}}function q(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let j=k.near,oe=k.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),z.near=N.near=C.near=j,z.far=N.far=C.far=oe,(I!==z.near||G!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,G=z.far),z.layers.mask=k.layers.mask|6,C.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let pe=k.parent,ce=z.cameras;q(z,pe);for(let Re=0;Re<ce.length;Re++)q(ce[Re],pe);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&k.isPerspectiveCamera&&(P={camera:k,fov:k.fov,zoom:k.zoom}),E(k,z,pe)};function E(k,j,oe){oe===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=oa*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(k){return g[k]};let V=null;function te(k,j){if(h=j.getViewerPose(c||a),m=j,h!==null){let oe=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let pe=!1;oe.length!==z.cameras.length&&(z.cameras.length=0,pe=!0);for(let we=0;we<oe.length;we++){let Fe=oe[we],Ce=null;if(u!==null)Ce=u.getViewport(Fe);else{let st=d.getViewSubImage(f,Fe);Ce=st.viewport,we===0&&(e.setRenderTargetTextures(y,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(y))}let Pe=L[we];Pe===void 0&&(Pe=new Dn,Pe.layers.enable(we),Pe.viewport=new Pt,L[we]=Pe),Pe.matrix.fromArray(Fe.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Fe.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),we===0&&(z.matrix.copy(Pe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),pe===!0&&z.cameras.push(Pe)}let ce=i.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let we=d.getDepthInformation(oe[0]);we&&we.isValid&&we.texture&&p.init(we,i.renderState)}if(ce&&ce.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let we=0;we<oe.length;we++){let Fe=oe[we].camera;if(Fe){let Ce=g[Fe];Ce||(Ce=new Io,g[Fe]=Ce);let Pe=d.getCameraImage(Fe);Ce.sourceTexture=Pe}}}}for(let oe=0;oe<w.length;oe++){let pe=A[oe],ce=w[oe];pe!==null&&ce!==void 0&&ce.update(pe,j,c||a)}V&&V(k,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let le=new bg;le.setAnimationLoop(te),this.setAnimationLoop=function(k){V=k},this.dispose=function(){}}},yb=new pt,Dg=new We;Dg.set(-1,0,0,0,1,0,0,0,1);bb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;Hh=class{constructor(e={}){let{canvas:t=Ym(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=qn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=u,p=new Set([oh,ah,sh]),g=new Set([qn,Pi,wa,ds,nh,ih]),v=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,A=null,x=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,L=null,z=null,I=null,G=null;this._outputColorSpace=pn;let X=0,O=0,Q=null,q=-1,E=null,V=new Pt,te=new Pt,le=null,k=new Ve(0),j=0,oe=t.width,pe=t.height,ce=1,Re=null,Ye=null,we=new Pt(0,0,oe,pe),Fe=new Pt(0,0,oe,pe),Ce=!1,Pe=new Ur,st=new Dc,lt=!1,$=!1,et=new pt,qt=new F,vt=new Pt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function Vt(){return Q===null?ce:1}let B=n;function ft(T,U){return t.getContext(T,U)}let ct,He,ge,ut,Ue,ze,R,M,W,he,se,me,ye,Y,ne,de,D,ee,K,_e,fe,xe,ue;try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",re,!1),B===null){let U="webgl2";if(B=ft(U,T),B===null)throw ft(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ve()}catch(T){throw t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ke("WebGLRenderer: "+T.message),T}function ve(){ct=new US(B),ct.init(),fe=new _b(B,ct),He=new TS(B,ct,e,fe),ge=new mb(B,ct),He.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),z=B.createFramebuffer(),I=B.createFramebuffer(),G=B.createFramebuffer(),ut=new BS(B),Ue=new tb,ze=new gb(B,ct,ge,Ue,He,fe,ut),R=new NS(C),M=new kx(B),xe=new MS(B,M),W=new OS(B,M,ut,xe),he=new kS(B,W,M,xe,ut),ee=new zS(B,He,ze),ne=new wS(Ue),se=new eb(C,R,ct,He,xe,ne),me=new Sb(C,Ue),ye=new ib,Y=new cb(ct),D=new SS(C,R,ge,he,m,l),de=new pb(C,he,He),ue=new Mb(B,ut,He,ge),K=new bS(B,ct,ut),_e=new FS(B,ct,ut),ut.programs=se.programs,C.capabilities=He,C.extensions=ct,C.properties=Ue,C.renderLists=ye,C.shadowMap=de,C.state=ge,C.info=ut}_!==qn&&(P=new VS(_,t.width,t.height,o,i,s));let ae=new sd(C,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ct.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ct.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(T){T!==void 0&&(ce=T,this.setSize(oe,pe,!1))},this.getSize=function(T){return T.set(oe,pe)},this.setSize=function(T,U,J=!0){if(ae.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,pe=U,t.width=Math.floor(T*ce),t.height=Math.floor(U*ce),J===!0&&(t.style.width=T+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(oe*ce,pe*ce).floor()},this.setDrawingBufferSize=function(T,U,J){oe=T,pe=U,ce=J,t.width=Math.floor(T*J),t.height=Math.floor(U*J),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===qn){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy(we)},this.setViewport=function(T,U,J,H){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,U,J,H),ge.viewport(V.copy(we).multiplyScalar(Vt()).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,U,J,H){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,U,J,H),ge.scissor(te.copy(Fe).multiplyScalar(Vt()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(T){ge.setScissorTest(Ce=T)},this.setOpaqueSort=function(T){Re=T},this.setTransparentSort=function(T){Ye=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,J=!0){let H=0;if(T){let Z=!1;if(Q!==null){let be=Q.texture.format;Z=p.has(be)}if(Z){let be=Q.texture.type,Le=g.has(be),Me=D.getClearColor(),Ae=D.getClearAlpha(),Oe=Me.r,qe=Me.g,nt=Me.b;Le?(v[0]=Oe,v[1]=qe,v[2]=nt,v[3]=Ae,B.clearBufferuiv(B.COLOR,0,v)):(b[0]=Oe,b[1]=qe,b[2]=nt,b[3]=Ae,B.clearBufferiv(B.COLOR,0,b))}else H|=B.COLOR_BUFFER_BIT}U&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),D.dispose(),ye.dispose(),Y.dispose(),ze.dispose(),Ue.dispose(),R.dispose(),he.dispose(),W.dispose(),xe.dispose(),ue.dispose(),se.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",yt),ae.removeEventListener("sessionend",mt),en.stop()};function ie(T){T.preventDefault(),mo("WebGLRenderer: Context Lost."),N=!0}function Se(){mo("WebGLRenderer: Context Restored."),N=!1;let T=ut.autoReset,U=de.enabled,J=de.autoUpdate,H=de.needsUpdate,Z=de.type;ve(),ut.autoReset=T,de.enabled=U,de.autoUpdate=J,de.needsUpdate=H,de.type=Z}function re(T){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ee(T){let U=T.target;U.removeEventListener("dispose",Ee),tt(U)}function tt(T){Xe(T),Ue.remove(T)}function Xe(T){let U=Ue.get(T).programs;U!==void 0&&(U.forEach(function(J){se.releaseProgram(J)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,J,H,Z,be){U===null&&(U=at);let Le=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Me=di(T,U,J,H,Z);ge.setMaterial(H,Le);let Ae=J.index,Oe=1;if(H.wireframe===!0){if(Ae=W.getWireframeAttribute(J),Ae===void 0)return;Oe=2}let qe=J.drawRange,nt=J.attributes.position,De=qe.start*Oe,it=(qe.start+qe.count)*Oe;be!==null&&(De=Math.max(De,be.start*Oe),it=Math.min(it,(be.start+be.count)*Oe)),Ae!==null?(De=Math.max(De,0),it=Math.min(it,Ae.count)):nt!=null&&(De=Math.max(De,0),it=Math.min(it,nt.count));let Jt=it-De;if(Jt<0||Jt===1/0)return;xe.setup(Z,H,Me,J,Ae);let Et,Mt=K;if(Ae!==null&&(Et=M.get(Ae),Mt=_e,Mt.setIndex(Et)),Z.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*Vt()),Mt.setMode(B.LINES)):Mt.setMode(B.TRIANGLES);else if(Z.isLine){let vn=H.linewidth;vn===void 0&&(vn=1),ge.setLineWidth(vn*Vt()),Z.isLineSegments?Mt.setMode(B.LINES):Z.isLineLoop?Mt.setMode(B.LINE_LOOP):Mt.setMode(B.LINE_STRIP)}else Z.isPoints?Mt.setMode(B.POINTS):Z.isSprite&&Mt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let vn=Z._multiDrawStarts,Ne=Z._multiDrawCounts,In=Z._multiDrawCount,dt=Ae?M.get(Ae).bytesPerElement:1,is=Ue.get(H).currentProgram.getUniforms();for(let yn=0;yn<In;yn++)is.setValue(B,"_gl_DrawID",yn),Mt.render(vn[yn]/dt,Ne[yn])}else if(Z.isInstancedMesh)Mt.renderInstances(De,Jt,Z.count);else if(J.isInstancedBufferGeometry){let vn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ne=Math.min(J.instanceCount,vn);Mt.renderInstances(De,Jt,Ne)}else Mt.render(De,Jt)};function Ct(T,U,J,H){L!==null&&T.isNodeMaterial&&L.setObject(H,T),lt===!0&&ne.setState(T,J,!1),T.transparent===!0&&T.side===qi&&T.forceSinglePass===!1?(T.side=On,T.needsUpdate=!0,ei(T,U,H),T.side=Gr,T.needsUpdate=!0,ei(T,U,H),T.side=qi):ei(T,U,H)}this.compile=function(T,U,J=null){J===null&&(J=T),L!==null&&L.renderStart(T,U,J),A=Y.get(J),A.init(U),S.push(A),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(U.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),T!==J&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(U.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),A.setupLights(),L!==null&&L.updateLights(A.state.lightsArray),$=this.localClippingEnabled,lt=ne.init(this.clippingPlanes,$),lt===!0&&ne.setGlobalState(this.clippingPlanes,U),L!==null&&de.render(A.state.shadowsArray,J,U);let H=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let be=Z.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){let Me=be[Le];Ct(Me,J,U,Z),H.add(Me)}else Ct(be,J,U,Z),H.add(be)}),A=S.pop(),L!==null&&L.renderEnd(),H},this.compileAsync=function(T,U,J=null){let H=this.compile(T,U,J);return new Promise(Z=>{function be(){if(H.forEach(function(Le){let Ae=Ue.get(Le).currentProgram;(Ae===void 0||Ae.isReady())&&H.delete(Le)}),H.size===0){Z(T);return}setTimeout(be,10)}ct.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Yt=null;function Rt(T){Yt&&Yt(T)}function yt(){en.stop()}function mt(){en.start()}let en=new bg;en.setAnimationLoop(Rt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(T){Yt=T,ae.setAnimationLoop(T),T===null?en.stop():en.start()},ae.addEventListener("sessionstart",yt),ae.addEventListener("sessionend",mt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(T,U);let J=ae.enabled===!0&&ae.isPresenting===!0,H=P!==null&&(Q===null||J)&&P.begin(C,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,U,Q),A=Y.get(T,S.length),A.init(U),A.state.textureUnits=ze.getTextureUnits(),S.push(A),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?st.setFromArrayCamera(U):Pe.setFromProjectionMatrix(et,mi,U.reversedDepth),$=this.localClippingEnabled,lt=ne.init(this.clippingPlanes,$),w=ye.get(T,x.length),w.init(),x.push(w),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Le=C.xr.getDepthSensingMesh();Le!==null&&St(Le,U,-1/0,C.sortObjects)}St(T,U,0,C.sortObjects),w.finish(),L!==null&&L.updateLights(A.state.lightsArray),C.sortObjects===!0&&w.sort(Re,Ye),Ot=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ot&&D.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),lt===!0&&ne.beginShadows();let Z=A.state.shadowsArray;if(de.render(Z,T,U),lt===!0&&ne.endShadows(),(H&&P.hasRenderPass())===!1){let Le=w.opaque,Me=w.transmissive;if(A.setupLights(),U.isArrayCamera){let Ae=U.cameras;if(Me.length>0)for(let Oe=0,qe=Ae.length;Oe<qe;Oe++){let nt=Ae[Oe];jn(Le,Me,T,nt)}Ot&&D.render(T);for(let Oe=0,qe=Ae.length;Oe<qe;Oe++){let nt=Ae[Oe];xn(w,T,nt,nt.viewport)}}else Me.length>0&&jn(Le,Me,T,U),Ot&&D.render(T),xn(w,T,U)}Q!==null&&O===0&&(ze.updateMultisampleRenderTarget(Q),ze.updateRenderTargetMipmap(Q)),H&&P.end(C),T.isScene===!0&&T.onAfterRender(C,T,U),xe.resetDefaultState(),q=-1,E=null,S.pop(),S.length>0?(A=S[S.length-1],ze.setTextureUnits(A.state.textureUnits),lt===!0&&ne.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,L!==null&&L.renderEnd()};function St(T,U,J,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){let Le=U.isArrayCamera?st:Pe;if(!T.frustumCulled||T.intersectsFrustum(Le)){H&&vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(et);let Me=he.update(T),Ae=T.material;Ae.visible&&w.push(T,Me,Ae,J,vt.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Le=U.isArrayCamera?st:Pe;if(!T.frustumCulled||T.intersectsFrustum(Le)){let Me=he.update(T),Ae=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),vt.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),vt.copy(Me.boundingSphere.center)),vt.applyMatrix4(T.matrixWorld).applyMatrix4(et)),Array.isArray(Ae)){let Oe=Me.groups;for(let qe=0,nt=Oe.length;qe<nt;qe++){let De=Oe[qe],it=Ae[De.materialIndex];it&&it.visible&&w.push(T,Me,it,J,vt.z,De,U)}}else Ae.visible&&w.push(T,Me,Ae,J,vt.z,null,U)}}}let be=T.children;for(let Le=0,Me=be.length;Le<Me;Le++)St(be[Le],U,J,H)}function xn(T,U,J,H){let{opaque:Z,transmissive:be,transparent:Le}=T;A.setupLightsView(J),lt===!0&&ne.setGlobalState(C.clippingPlanes,J),H&&ge.viewport(V.copy(H)),Z.length>0&&Ft(Z,U,J),be.length>0&&Ft(be,U,J),Le.length>0&&Ft(Le,U,J),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function jn(T,U,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){let De=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new ii(1,1,{generateMipmaps:!0,type:De?Ii:qn,minFilter:pr,samples:Math.max(4,He.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let be=A.state.transmissionRenderTarget[H.id],Le=H.viewport||V;be.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);let Me=C.getRenderTarget(),Ae=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(be),C.getClearColor(k),j=C.getClearAlpha(),j<1&&C.setClearColor(16777215,.5),C.clear(),Ot&&D.render(J);let qe=C.toneMapping;C.toneMapping=Yi;let nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),lt===!0&&ne.setGlobalState(C.clippingPlanes,H),Ft(T,J,H),ze.updateMultisampleRenderTarget(be),ze.updateRenderTargetMipmap(be),ct.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let it=0,Jt=U.length;it<Jt;it++){let Et=U[it],{object:Mt,geometry:vn,material:Ne,group:In}=Et;if(Ne.side===qi&&Mt.layers.test(H.layers)){let dt=Ne.side;Ne.side=On,Ne.needsUpdate=!0,Zt(Mt,J,H,vn,Ne,In),Ne.side=dt,Ne.needsUpdate=!0,De=!0}}De===!0&&(ze.updateMultisampleRenderTarget(be),ze.updateRenderTargetMipmap(be))}C.setRenderTarget(Me,Ae,Oe),C.setClearColor(k,j),nt!==void 0&&(H.viewport=nt),C.toneMapping=qe}function Ft(T,U,J){let H=U.isScene===!0?U.overrideMaterial:null;for(let Z=0,be=T.length;Z<be;Z++){let Le=T[Z],{object:Me,geometry:Ae,group:Oe}=Le,qe=Le.material;qe.allowOverride===!0&&H!==null&&(qe=H),Me.layers.test(J.layers)&&Zt(Me,U,J,Ae,qe,Oe)}}function Zt(T,U,J,H,Z,be){L!==null&&Z.isNodeMaterial&&L.setObject(T,Z),T.onBeforeRender(C,U,J,H,Z,be),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(C,U,J,H,T,be),Z.transparent===!0&&Z.side===qi&&Z.forceSinglePass===!1?(Z.side=On,Z.needsUpdate=!0,C.renderBufferDirect(J,U,H,Z,T,be),Z.side=Gr,Z.needsUpdate=!0,C.renderBufferDirect(J,U,H,Z,T,be),Z.side=qi):C.renderBufferDirect(J,U,H,Z,T,be),T.onAfterRender(C,U,J,H,Z,be)}function tn(T){let U=0;for(let J of T)J.texture!==null&&U++;return U}function ei(T,U,J){U.isScene!==!0&&(U=at);let H=Ue.get(T),Z=A.state.lights,be=A.state.shadowsArray,Le=Z.state.version,Me=se.getParameters(T,Z.state,be,U,J,A.state.lightProbeGridArray),Ae=se.getProgramCacheKey(Me),Oe=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=R.get(T.envMap||H.environment,qe),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Ee),Oe=new Map,H.programs=Oe,H.programVariants=new Map);let nt=Oe.get(Ae);if(nt!==void 0){if(H.currentProgram===nt&&H.lightsStateVersion===Le)return Bt(T,Me),nt}else Me.uniforms=se.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,J,Me),T.onBeforeCompile(Me,C),nt=se.acquireProgram(Me,Ae),Oe.set(Ae,nt),H.uniforms=Me.uniforms;let De=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=ne.uniform),Bt(T,Me),H.needsLights=Bl(T),H.lightsStateVersion=Le,H.needsLights&&(De.ambientLightColor.value=Z.state.ambient,De.lightProbe.value=Z.state.probe,De.sunLights.value=Z.state.sun,De.sunLightShadows.value=Z.state.sunShadow,De.directionalLights.value=Z.state.directional,De.directionalLightShadows.value=Z.state.directionalShadow,De.spotLights.value=Z.state.spot,De.spotLightShadows.value=Z.state.spotShadow,De.rectAreaLights.value=Z.state.rectArea,De.ltc_1.value=Z.state.rectAreaLTC1,De.ltc_2.value=Z.state.rectAreaLTC2,De.pointLights.value=Z.state.point,De.pointLightShadows.value=Z.state.pointShadow,De.hemisphereLights.value=Z.state.hemi,De.sunShadowMatrix.value=Z.state.sunShadowMatrix,De.sunShadowCascade.value=Z.state.sunShadowCascade,De.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,De.spotLightMatrix.value=Z.state.spotLightMatrix,De.spotLightMap.value=Z.state.spotLightMap,De.pointShadowMatrix.value=Z.state.pointShadowMatrix),H.numLightProbeGrids=tn(A.state.lightProbeGridArray),H.currentProgram=nt,H.uniformsList=null,nt}function Fs(T,U,J,H,Z){let be=Ue.get(T),Le=be.currentProgram.id+","+H+","+Z,Me=be.programVariants.get(Le);return Me===void 0?(Me=ei(T,U,J),be.programVariants.set(Le,Me)):(be.currentProgram=Me,be.uniformsList=null,be.outputColorSpace=H,be.toneMapping=Z),Me}function nn(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Aa.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Bt(T,U){let J=Ue.get(T);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function di(T,U,J,H,Z){U.isScene!==!0&&(U=at),ze.resetTextureUnits();let be=U.fog,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,Me=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:rt.workingColorSpace,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Oe=R.get(H.envMap||Le,Ae),qe=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!J.morphAttributes.position,it=!!J.morphAttributes.normal,Jt=!!J.morphAttributes.color,Et=Yi;H.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Et=C.toneMapping);let Mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vn=Mt!==void 0?Mt.length:0,Ne=Ue.get(H),In=A.state.lights;if(lt===!0&&($===!0||T!==E)){let Lt=T===E&&H.id===q;ne.setState(H,T,Lt)}let dt=!1,is=!1;H.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==In.state.version||Z.isBatchedMesh&&Ne.batching===!1||!Z.isBatchedMesh&&Ne.batching===!0||Z.isBatchedMesh&&Ne.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ne.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ne.instancing===!1||!Z.isInstancedMesh&&Ne.instancing===!0||Z.isSkinnedMesh&&Ne.skinning===!1||!Z.isSkinnedMesh&&Ne.skinning===!0||Z.isInstancedMesh&&Ne.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ne.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ne.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ne.instancingMorph===!1&&Z.morphTexture!==null||Ne.envMap!==Oe||H.fog===!0&&Ne.fog!==be||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ne.numPlanes||Ne.numIntersection!==ne.numIntersection)||Ne.vertexAlphas!==qe||Ne.vertexTangents!==nt||Ne.morphTargets!==De||Ne.morphNormals!==it||Ne.morphColors!==Jt||Ne.morphTargetsCount!==vn||Ne.numLightProbeGrids!==tn(A.state.lightProbeGridArray)?dt=!0:(Ne.outputColorSpace!==Me||Ne.toneMapping!==Et)&&(is=!0):(dt=!0,Ne.__version=H.version);let yn=Ne.currentProgram;(dt===!0||is===!0)&&(yn=is===!0?Fs(H,U,Z,Me,Et):ei(H,U,Z),L&&H.isNodeMaterial&&L.onUpdateProgram(H,yn,Ne));let zl=!1,Cr=!1,rs=!1,ht=yn.getUniforms(),dn=Ne.uniforms;if(ge.useProgram(yn.program)&&(zl=!0,Cr=!0,rs=!0),H.id!==q&&(q=H.id,Cr=!0),zl||E!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ht.setValue(B,"projectionMatrix",T.projectionMatrix),ht.setValue(B,"viewMatrix",T.matrixWorldInverse);let ln=ht.map.cameraPosition;ln!==void 0&&ln.setValue(B,qt.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&ht.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Cr=!0,rs=!0)}if(Ne.needsLights&&(In.state.sunShadowMap.length>0&&ht.setValue(B,"sunShadowMap",In.state.sunShadowMap,ze),In.state.directionalShadowMap.length>0&&ht.setValue(B,"directionalShadowMap",In.state.directionalShadowMap,ze),In.state.spotShadowMap.length>0&&ht.setValue(B,"spotShadowMap",In.state.spotShadowMap,ze),In.state.pointShadowMap.length>0&&ht.setValue(B,"pointShadowMap",In.state.pointShadowMap,ze)),Z.isSkinnedMesh){ht.setOptional(B,Z,"bindMatrix"),ht.setOptional(B,Z,"bindMatrixInverse");let Lt=Z.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ht.setValue(B,"boneTexture",Lt.boneTexture,ze))}Z.isBatchedMesh&&(ht.setOptional(B,Z,"batchingTexture"),ht.setValue(B,"batchingTexture",Z._matricesTexture,ze),ht.setOptional(B,Z,"batchingIdTexture"),ht.setValue(B,"batchingIdTexture",Z._indirectTexture,ze),ht.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ht.setValue(B,"batchingColorTexture",Z._colorsTexture,ze));let Ti=J.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&ee.update(Z,J,yn),(Cr||Ne.receiveShadow!==Z.receiveShadow)&&(Ne.receiveShadow=Z.receiveShadow,ht.setValue(B,"receiveShadow",Z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=Tb()),Cr){if(ht.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ne.needsLights&&Ka(dn,rs),be&&H.fog===!0&&me.refreshFogUniforms(dn,be),me.refreshMaterialUniforms(dn,H,ce,pe,A.state.transmissionRenderTarget[T.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Lt=y,ln=0;for(let ir of A.state.lightProbeGridArray)ir.texture!==null&&(Lt.textures[ln]=ir.texture,Lt.min[ln]=ir.boundingBox.min,Lt.max[ln]=ir.boundingBox.max,Lt.resolution[ln]=ir.resolution,ln++);for(let ir in Lt)Lt[ir].length=ln;dn.probesSH.value=Lt.textures,dn.probesMin.value=Lt.min,dn.probesMax.value=Lt.max,dn.probesResolution.value=Lt.resolution}Aa.upload(B,nn(Ne),dn,ze)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Aa.upload(B,nn(Ne),dn,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(B,"center",Z.center),ht.setValue(B,"modelViewMatrix",Z.modelViewMatrix),ht.setValue(B,"normalMatrix",Z.normalMatrix),ht.setValue(B,"modelMatrix",Z.matrixWorld),H.uniformsGroups!==void 0){let Lt=H.uniformsGroups;for(let ln=0,ir=Lt.length;ln<ir;ln++){let Pp=Lt[ln];ue.update(Pp,yn),ue.bind(Pp,yn)}}return yn}function Ka(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Bl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,U,J){let H=Ue.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ue.get(T.texture).__webglTexture=U,Ue.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let J=Ue.get(T);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,J=0){Q=T,X=U,O=J;let H=null,Z=!1,be=!1;if(T){let Me=Ue.get(T);if(Me.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),V.copy(T.viewport),te.copy(T.scissor),le=T.scissorTest,ge.viewport(V),ge.scissor(te),ge.setScissorTest(le),q=-1;return}else if(Me.__webglFramebuffer===void 0)ze.setupRenderTarget(T);else if(Me.__hasExternalTextures)ze.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let qe=T.depthTexture;if(Me.__boundDepthTexture!==qe){if(qe!==null&&Ue.has(qe)&&(T.width!==qe.image.width||T.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(T)}}let Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(be=!0);let Oe=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?H=Oe[U][J]:H=Oe[U],Z=!0):T.samples>0&&ze.useMultisampledRTT(T)===!1?H=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[J]:H=Oe,V.copy(T.viewport),te.copy(T.scissor),le=T.scissorTest}else V.copy(we).multiplyScalar(ce).floor(),te.copy(Fe).multiplyScalar(ce).floor(),le=Ce;if(J!==0&&(H=z),ge.bindFramebuffer(B.FRAMEBUFFER,H)&&ge.drawBuffers(T,H),ge.viewport(V),ge.scissor(te),ge.setScissorTest(le),Z){let Me=Ue.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,J)}else if(be){let Me=U;for(let Ae=0;Ae<T.textures.length;Ae++){let Oe=Ue.get(T.textures[Ae]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ae,Oe.__webglTexture,J,Me)}}else if(T!==null&&J!==0){let Me=Ue.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,J)}q=-1};function Ar(T){let U=Ue.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=He.textureFormatReadable(T.format),U.__typeReadable=He.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,J,H,Z,be,Le,Me=0){if(!(T&&T.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ae=Ae[Le],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){ge.bindFramebuffer(B.FRAMEBUFFER,Ae);try{let Oe=T.textures[Me],qe=Oe.format,nt=Oe.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);let De=Ar(Oe);if(De.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&J>=0&&J<=T.height-Z&&B.readPixels(U,J,H,Z,fe.convert(qe),fe.convert(nt),be)}finally{let Oe=Q!==null?Ue.get(Q).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,U,J,H,Z,be,Le,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ae=Ae[Le],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(U>=0&&U<=T.width-H&&J>=0&&J<=T.height-Z){ge.bindFramebuffer(B.FRAMEBUFFER,Ae);let Oe=T.textures[Me],qe=Oe.format,nt=Oe.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);let De=Ar(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),B.readPixels(U,J,H,Z,fe.convert(qe),fe.convert(nt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Jt=Q!==null?Ue.get(Q).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Jt);let Et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Jm(B,Et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(it),B.deleteSync(Et),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,J=0){let H=Math.pow(2,-J),Z=Math.floor(T.image.width*H),be=Math.floor(T.image.height*H),Le=U!==null?U.x:0,Me=U!==null?U.y:0;ze.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Le,Me,Z,be),ge.unbindTexture()},this.copyTextureToTexture=function(T,U,J=null,H=null,Z=0,be=0){let Le,Me,Ae,Oe,qe,nt,De,it,Jt,Et=T.isCompressedTexture?T.mipmaps[be]:T.image;if(J!==null)Le=J.max.x-J.min.x,Me=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Oe=J.min.x,qe=J.min.y,nt=J.isBox3?J.min.z:0;else{let ht=Math.pow(2,-Z);Le=Math.floor(Et.width*ht),Me=Math.floor(Et.height*ht),T.isDataArrayTexture?Ae=Et.depth:T.isData3DTexture?Ae=Math.floor(Et.depth*ht):Ae=1,Oe=0,qe=0,nt=0}H!==null?(De=H.x,it=H.y,Jt=H.z):(De=0,it=0,Jt=0);let Mt=fe.convert(U.format),vn=fe.convert(U.type),Ne;U.isData3DTexture?(ze.setTexture3D(U,0),Ne=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ze.setTexture2DArray(U,0),Ne=B.TEXTURE_2D_ARRAY):(ze.setTexture2D(U,0),Ne=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let In=ge.getParameter(B.UNPACK_ROW_LENGTH),dt=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),is=ge.getParameter(B.UNPACK_SKIP_PIXELS),yn=ge.getParameter(B.UNPACK_SKIP_ROWS),zl=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),ge.pixelStorei(B.UNPACK_SKIP_ROWS,qe),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,nt);let Cr=T.isDataArrayTexture||T.isData3DTexture,rs=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let ht=Ue.get(T),dn=Ue.get(U),Ti=Ue.get(ht.__renderTarget),Lt=Ue.get(dn.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Ti.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let ln=0;ln<Ae;ln++)Cr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(T).__webglTexture,Z,nt+ln),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(U).__webglTexture,be,Jt+ln)),B.blitFramebuffer(Oe,qe,Oe+Le,qe+Me,De,it,De+Le,it+Me,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||Ue.has(T)){let ht=Ue.get(T),dn=Ue.get(U);ge.bindFramebuffer(B.READ_FRAMEBUFFER,I),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,G);for(let Ti=0;Ti<Ae;Ti++)Cr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ht.__webglTexture,Z,nt+Ti):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ht.__webglTexture,Z),rs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dn.__webglTexture,be,Jt+Ti):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dn.__webglTexture,be),Z!==0?B.blitFramebuffer(Oe,qe,Oe+Le,qe+Me,De,it,De+Le,it+Me,B.COLOR_BUFFER_BIT,B.NEAREST):rs?B.copyTexSubImage3D(Ne,be,De,it,Jt+Ti,Oe,qe,Le,Me):B.copyTexSubImage2D(Ne,be,De,it,Oe,qe,Le,Me);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else rs?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ne,be,De,it,Jt,Le,Me,Ae,Mt,vn,Et.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Ne,be,De,it,Jt,Le,Me,Ae,Mt,Et.data):B.texSubImage3D(Ne,be,De,it,Jt,Le,Me,Ae,Mt,vn,Et):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,be,De,it,Le,Me,Mt,vn,Et.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,be,De,it,Et.width,Et.height,Mt,Et.data):B.texSubImage2D(B.TEXTURE_2D,be,De,it,Le,Me,Mt,vn,Et);ge.pixelStorei(B.UNPACK_ROW_LENGTH,In),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,is),ge.pixelStorei(B.UNPACK_SKIP_ROWS,yn),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,zl),be===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Ne),ge.unbindTexture()},this.initRenderTarget=function(T){Ue.get(T).__webglFramebuffer===void 0&&ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){X=0,O=0,Q=null,ge.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}});function _r(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var $n,ol,Td,mn,It,vi,wt,pd,wb,Eb,Wg,Ab,Cb,an,zt,vr,tu,Qi,Jn,wd,qh,Xg,wn,Rb,Pb,Ug,Ed,xs,od,Ad,Ib,Lb,Nt,$i,md,Cd,ai,$h,qg,Yg,nu,ll,Zg,cl,Db,Yh,Nb,Rd,Xr,gd,Jg,Yn,ld,Og,Zh,Pd,Id,qr,Ld,Fn,kt,Dt,vs,Ub,Kh,Dd,$g,Kg,Qg,oi,Ob,Pa,Fg,Qh,rl,Fb,jg,iu,Yr,ms,Bb,_d,zb,Bg,Ia,jh,ru,su,e_,Ki,t_,n_,kb,xd,Gb,Vb,La,zg,Hb,xi,sl,Zr,fl,gn,Wb,vd,i_,Xb,yi,yd,r_,s_,Sd,a_,o_,qb,Yb,Zb,l_,Jb,$b,Na,c_,Kb,kg,si,nl,Ra,h_,u_,Tt,il,cd,f_,d_,Gg,xr,Qb,Nd,hl,Zn,Da,ot,jb,eT,tT,nT,iT,rT,gs,ys,p_,hd,ud,Ud,ul,Tn,sT,Od,aT,Fd,Wr,Md,Bd,oT,lT,cT,al,m_,g_,Xt,zd,__,hT,uT,au,x_,fT,kd,Gd,dT,pT,mT,Vd,Bn,_s,Jh,gT,Vg,_T,fd,bd,v_,xT,eu,vT,yT,dd,En,ST,MT,bT,TT,wT,ET,AT,CT,RT,PT,IT,LT,DT,NT,UT,OT,FT,BT,Hd=Rr(()=>{$n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ol={duration:.5,overwrite:!1,delay:0},vi=1e8,wt=1/vi,pd=Math.PI*2,wb=pd/4,Eb=0,Wg=Math.sqrt,Ab=Math.cos,Cb=Math.sin,an=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},vr=function(e){return typeof e=="number"},tu=function(e){return typeof e>"u"},Qi=function(e){return typeof e=="object"},Jn=function(e){return e!==!1},wd=function(){return typeof window<"u"},qh=function(e){return zt(e)||an(e)},Xg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,Rb=/random\([^)]+\)/g,Pb=/,\s*/g,Ug=/(?:-?\.?\d|\.)+/gi,Ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,od=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ad=/[+-]=-?[.\d]+/,Ib=/[^,'"\[\]\s]+/gi,Lb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ai={},$h={},Yg=function(e){return($h=Pa(e,ai))&&En},nu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ll=function(e,t){return!t&&console.warn(e)},Zg=function(e,t){return e&&(ai[e]=t)&&$h&&($h[e]=t)||ai},cl=function(){return 0},Db={suppressEvents:!0,isStart:!0,kill:!1},Yh={suppressEvents:!0,kill:!1},Nb={suppressEvents:!0},Rd={},Xr=[],gd={},Yn={},ld={},Og=30,Zh=[],Pd="",Id=function(e){var t=e[0],n,i;if(Qi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Zh.length;i--&&!Zh[i].targetTest(t););n=Zh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ud(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||Id(yi(e))[0]._gsap},Ld=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():tu(n)&&e.getAttribute&&e.getAttribute(t)||n},Fn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},vs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ub=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Kh=function(){var e=Xr.length,t=Xr.slice(0),n,i;for(gd={},Xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dd=function(e){return!!(e._initted||e._startAt||e.add)},$g=function(e,t,n,i){Xr.length&&!mn&&Kh(),e.render(t,n,i||!!(mn&&t<0&&Dd(e))),Xr.length&&!mn&&Kh()},Kg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ib).length<2?t:an(e)?e.trim():e},Qg=function(e){return e},oi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ob=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Pa=function(e,t){for(var n in t)e[n]=t[n];return e},Fg=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Qh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},rl=function(e){var t=e.parent||Nt,n=e.keyframes?Ob(wn(e.keyframes)):oi;if(Jn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Fb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},iu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Bb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_d=function(e,t,n,i){return e._startAt&&(mn?e._startAt.revert(Yh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},zb=function r(e){return!e||e._ts&&r(e.parent)},Bg=function(e){return e._repeat?Ia(e._tTime,e=e.duration()+e._rDelay)*e:0},Ia=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},jh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ru=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},su=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ru(e),n._dirty||ms(n,e)),e},e_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=jh(e.rawTime(),t),(!t._dur||fl(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Ki=function(e,t,n,i){return t.parent&&Yr(t),t._start=Dt((vr(n)?n:n||e!==Nt?xi(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jg(e,t,"_first","_last",e._sort?"_start":0),xd(t)||(e._recent=t),i||e_(e,t),e._ts<0&&su(e,e._tTime),e},t_=function(e,t){return(ai.ScrollTrigger||nu("scrollTrigger",t))&&ai.ScrollTrigger.create(t,e)},n_=function(e,t,n,i,s){if(Bd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jg!==Zn.frame)return Xr.push(e),e._lazy=[s,i],1},kb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gb=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&kb(e)&&!(!e._initted&&xd(e))||(e._ts<0||e._dp._ts<0)&&!xd(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=fl(0,e._tDur,t),h=Ia(l,o),e._yoyo&&h&1&&(a=1-a),h!==Ia(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||mn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&n_(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&_d(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yr(e,1),!n&&!mn&&(si(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Vb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},La=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&su(e,e._tTime=e._tDur*o),e.parent&&ru(e),n||ms(e.parent,e),e},zg=function(e){return e instanceof Tn?ms(e):La(e,e._dur)},Hb={_start:0,endTime:cl,totalDuration:cl},xi=function r(e,t,n){var i=e.labels,s=e._recent||Hb,a=e.duration()>=vi?s.endTime(!1):e._dur,o,l,c;return an(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},sl=function(e,t,n){var i=vr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Jn(l.vars.inherit)&&l.parent;a.immediateRender=Jn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Xt(t[0],a,t[s+1])},Zr=function(e,t){return e||e===0?t(e):t},fl=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!an(e)||!(t=Lb.exec(e))?"":t[1]},Wb=function(e,t,n){return Zr(n,function(i){return fl(e,t,i)})},vd=[].slice,i_=function(e,t){return e&&Qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qi(e[0]))&&!e.nodeType&&e!==$i},Xb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return an(i)&&!t||i_(i,1)?(s=n).push.apply(s,yi(i)):n.push(i)})||n},yi=function(e,t,n){return It&&!t&&It.selector?It.selector(e):an(e)&&!n&&(md||!Da())?vd.call((t||Cd).querySelectorAll(e),0):wn(e)?Xb(e,n):i_(e)?vd.call(e,0):e?[e]:[]},yd=function(e){return e=yi(e)[0]||ll("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yi(t,n.querySelectorAll?n:n===e?ll("Invalid scope")||Cd.createElement("div"):e)}},r_=function(e){return e.sort(function(){return .5-Math.random()})},s_=function(e){if(zt(e))return e;var t=Qi(e)?e:{each:e},n=gs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return an(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(f,u,m){var _=(m||t).length,p=a[_],g,v,b,y,w,A,x,S,P;if(!p){if(P=t.grid==="auto"?0:(t.grid||[1,vi])[1],!P){for(x=-vi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=a[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===vi?0:l?_*d/P-.5:i/P|0,x=0,S=vi,A=0;A<_;A++)b=A%P-g,y=v-(A/P|0),p[A]=w=c?Math.abs(c==="y"?y:b):Wg(b*b+y*y),w>x&&(x=w),w<S&&(S=w);i==="random"&&r_(p),p.max=x-S,p.min=S,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=gn(t.amount||t.each)||0,n=n&&_<0?rT(n):n}return _=(p[f]-p.min)/p.max||0,Dt(p.b+(n?n(_):_)*p.v)+p.u}},Sd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(vr(n)?0:gn(n))}},a_=function(e,t){var n=wn(e),i,s;return!n&&Qi(e)&&(i=n=e.radius||vi,e.values?(e=yi(e.values),(s=!vr(e[0]))&&(i*=i)):e=Sd(e.increment)),Zr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=vi,h=0,d=e.length,f,u;d--;)s?(f=e[d].x-o,u=e[d].y-l,f=f*f+u*u):f=Math.abs(e[d]-o),f<c&&(c=f,h=d);return h=!i||c<=i?e[h]:a,s||h===a||vr(a)?h:h+gn(a)}:Sd(e))},o_=function(e,t,n,i){return Zr(wn(e)?!t:n===!0?!!(n=0):!i,function(){return wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Yb=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},Zb=function(e,t,n){return c_(e,t,0,1,n)},l_=function(e,t,n){return Zr(n,function(i){return e[~~t(i)]})},Jb=function r(e,t,n){var i=t-e;return wn(e)?l_(e,r(0,e.length),t):Zr(n,function(s){return(i+(s-e)%i)%i+e})},$b=function r(e,t,n){var i=t-e,s=i*2;return wn(e)?l_(e,r(0,e.length-1),t):Zr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Na=function(e){return e.replace(Rb,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Pb);return o_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},c_=function(e,t,n,i,s){var a=t-e,o=i-n;return Zr(s,function(l){return n+((l-e)/a*o||0)})},Kb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var a=an(e),o={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(h=[],d=e.length,f=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},n=t}else i||(e=Pa(wn(e)?[]:{},e));if(!h){for(l in t)Od.call(o,e,l,"get",t[l]);s=function(m){return Gd(m,o)||(a?e.p:e)}}}return Zr(n,s)},kg=function(e,t,n){var i=e.labels,s=vi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},si=function(e,t,n){var i=e.vars,s=i[t],a=It,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xr.length&&Kh(),o&&(It=o),h=l?s.apply(c,l):s.call(c),It=a,h},nl=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&si(e,"onInterrupt"),e},h_=[],u_=function(e){if(e)if(e=!e.name&&e.default||e,wd()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:cl,render:Gd,add:Od,kill:pT,modifier:dT,rawVars:0},a={targetTest:0,get:0,getSetter:au,aliases:{},register:0};if(Da(),e!==i){if(Yn[t])return;oi(i,oi(Qh(e,s),a)),Pa(i.prototype,Pa(s,Qh(e,a))),Yn[i.prop=t]=i,e.targetTest&&(Zh.push(i),Rd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zg(t,i),e.register&&e.register(En,i,Bn)}else h_.push(e)},Tt=255,il={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},cd=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},f_=function(e,t,n){var i=e?vr(e)?[e>>16,e>>8&Tt,e&Tt]:0:il.black,s,a,o,l,c,h,d,f,u,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),il[e])i=il[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Tt,i&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Ug),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=cd(l+1/3,s,a),i[1]=cd(l,s,a),i[2]=cd(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Ed),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ug)||il.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/Tt,a=i[1]/Tt,o=i[2]/Tt,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===s?(a-o)/u+(a<o?6:0):d===a?(o-s)/u+2:(s-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},d_=function(e){var t=[],n=[],i=-1;return e.split(xr).forEach(function(s){var a=s.match(xs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Gg=function(e,t,n){var i="",s=(e+i).match(xr),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(f){return(f=f_(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=d_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(xr,"1").split(xs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(xr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in il)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Qb=/hsl[a]?\(/,Nd=function(e){var t=e.join(" "),n;if(xr.lastIndex=0,xr.test(t))return n=Qb.test(t),e[1]=Gg(e[1],n),e[0]=Gg(e[0],n,d_(e[1])),!0},Zn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,f,u,m=function _(p){var g=r()-i,v=p===!0,b,y,w,A;if((g>e||g<0)&&(n+=g-t),i+=g,w=i-n,b=w-a,(b>0||v)&&(A=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,a+=b+(b>=s?4:s-b),y=1),v||(l=c(_)),y)for(u=0;u<o.length;u++)o[u](w,f,A,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qg&&(!md&&wd()&&($i=md=window,Cd=$i.document||{},ai.gsap=En,($i.gsapVersions||($i.gsapVersions=[])).push(En.version),Yg($h||$i.GreenSockGlobals||!$i.gsap&&$i||{}),h_.forEach(u_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},hl=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),hl=0,c=cl},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,g,v){var b=g?function(y,w,A,x){p(y,w,A,x),d.remove(b)}:p;return d.remove(p),o[v?"unshift":"push"](b),Da(),b},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&u>=g&&u--},_listeners:o},d})(),Da=function(){return!hl&&Zn.wake()},ot={},jb=/^[\d.\-M][\d.\-,\s]/,eT=/["']/g,tT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(eT,"").trim():+c,i=l.substr(o+1).trim();return t},nT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},iT=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[tT(t[1])]:nT(e).split(",").map(Kg)):ot._CE&&jb.test(e)?ot._CE("",e):n},rT=function(e){return function(t){return 1-e(1-t)}},gs=function(e,t){return e&&(zt(e)?e:ot[e]||iT(e))||t},ys=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Fn(e,function(o){ot[o]=ai[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},p_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},hd=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/pd*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Cb((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:p_(o);return s=pd/s,l.config=function(c,h){return r(e,c,h)},l},ud=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:p_(n);return i.config=function(s){return r(e,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ys(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;ys("Elastic",hd("in"),hd("out"),hd());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ys("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ys("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ys("Circ",function(r){return-(Wg(1-r*r)-1)});ys("Sine",function(r){return r===1?1:-Ab(r*wb)+1});ys("Back",ud("in"),ud("out"),ud());ot.SteppedEase=ot.steps=ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((i*fl(0,a,o)|0)+s)*n}}};ol.ease=ot["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Pd+=r+","+r+"Params,"});Ud=function(e,t){this.id=Eb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ld,this.set=t?t.getSetter:au},ul=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,La(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),hl||Zn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,La(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Da(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(su(this,n),!s._dp||s.parent||e_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$g(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ia(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?jh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(fl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ru(this),Bb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Da(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ki(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Nb);var i=mn;return mn=n,Dd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xi(this,n),Jn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Jn(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=zt(n)?n:Qg,l=function(){var h=i.then;i.then=null,s&&s(),zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){nl(this)},r})();oi(ul.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});Tn=(function(r){Hg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Jn(n.sortChildren),Nt&&Ki(n.parent||Nt,_r(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&t_(_r(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return sl(0,arguments,this),this},t.from=function(i,s,a){return sl(1,arguments,this),this},t.fromTo=function(i,s,a,o){return sl(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,rl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(i,s,xi(this,a),1),this},t.call=function(i,s,a){return Ki(this,Xt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Xt(i,a,xi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,rl(a).immediateRender=Jn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,rl(o).immediateRender=Jn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Dt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,_,p,g,v,b,y,w,A,x;if(this!==Nt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,b=this._ts,g=!b,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Dt(h%p),h===l?(_=this._repeat,f=c):(w=Dt(h/p),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=Ia(this._tTime,p),!o&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),A&&_&1&&(f=c-f,x=1),_!==w&&!this._lock){var S=A&&w&1,P=S===(A&&_&1);if(_<w&&(S=!S),o=S?0:h%c?c:h,this._lock=1,this.render(o||(x?0:Dt(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,w=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Vb(this,Dt(o),Dt(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!w&&(si(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,s,a),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-wt);break}}u=m}else{u=this._last;for(var C=i<0?i:f;u;){if(m=u._prev,(u._act||C<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,s,a||mn&&Dd(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=C?-wt:wt);break}}u=m}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-wt)._zTime=f>=o?1:-1,this._ts))return this._start=y,ru(this),this.render(i,s,a);this._onUpdate&&!s&&si(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(si(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(vr(s)||(s=xi(this,s,i)),!(i instanceof ul)){if(wn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(an(i))return this.addLabel(i,s);if(zt(i))i=Xt.delayedCall(0,i);else return this}return this!==i?Ki(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-vi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Xt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return an(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&iu(this,i),i===this._recent&&(this._recent=this._last),ms(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=xi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Xt.delayedCall(0,s||cl,a);return o.data="isPause",this._hasPause=1,Ki(this,o,xi(this,i))},t.removePause=function(i){var s=this._first;for(i=xi(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Wr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=yi(i),l=this._first,c=vr(s),h;l;)l instanceof Xt?Ub(l._targets,o)&&(c?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=xi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=Xt.to(a,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!u){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&La(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,oi({startAt:{time:xi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),kg(this,xi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),kg(this,xi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ms(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ms(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=vi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ki(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Dt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;La(a,a===Nt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Nt._ts&&($g(Nt,jh(i,Nt)),Jg=Zn.frame),Zn.frame>=Og){Og+=$n.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&$n.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},e})(ul);oi(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});sT=function(e,t,n,i,s,a,o){var l=new Bn(this._pt,e,t,0,1,kd,null,s),c=0,h=0,d,f,u,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Na(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),f=n.match(od)||[];d=od.exec(i);)m=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?vs(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=od.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ad.test(i)||g)&&(l.e=0),this._pt=l,l},Od=function(e,t,n,i,s,a,o,l,c,h){zt(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,u=zt(d)?c?hT:__:zd,m;if(an(i)&&(~i.indexOf("random(")&&(i=Na(i)),i.charAt(1)==="="&&(m=vs(f,i)+(gn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Md)return!isNaN(f*i)&&i!==""?(m=new Bn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?fT:x_,0,u),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&nu(t,i),sT.call(this,e,t,f,i,u,l||$n.stringFilter,c))},aT=function(e,t,n,i,s){if(zt(e)&&(e=al(e,s,t,n,i)),!Qi(e)||e.style&&e.nodeType||wn(e)||Xg(e))return an(e)?al(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=al(e[o],s,t,n,i);return a},Fd=function(e,t,n,i,s,a){var o,l,c,h;if(Yn[e]&&(o=new Yn[e]).init(s,o.rawVars?t[e]:aT(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ra))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Bd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:p,b=e._overwrite==="auto"&&!Td,y=e.timeline,w=i.easeReverse||d,A,x,S,P,C,N,L,z,I,G,X,O,Q;if(y&&(!f||!s)&&(s="none"),e._ease=gs(s,ol.ease),e._rEase=w&&(gs(w)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(z=p[0]?qr(p[0]).harness:0,O=z&&i[z.prop],A=Qh(i,Rd),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!u?_.render(-1,!0):_.revert(h&&m?Yh:Db),_._lazy=0),a){if(Yr(e._startAt=Xt.set(p,oi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Jn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!o&&!u)&&e._startAt.revert(Yh),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),S=oi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Jn(l),immediateRender:o,stagger:0,parent:g},A),O&&(S[z.prop]=O),Yr(e._startAt=Xt.set(p,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(Yh):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Jn(l)||l&&!m,x=0;x<p.length;x++){if(C=p[x],L=C._gsap||Id(p)[x]._gsap,e._ptLookup[x]=G={},gd[L.id]&&Xr.length&&Kh(),X=v===p?x:v.indexOf(C),z&&(I=new z).init(C,O||A,e,X,v)!==!1&&(e._pt=P=new Bn(e._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(q){G[q]=P}),I.priority&&(N=1)),!z||O)for(S in A)Yn[S]&&(I=Fd(S,A,e,X,C,v))?I.priority&&(N=1):G[S]=P=Od.call(e,C,S,"get",A[S],X,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(C,e._op[x]),b&&e._pt&&(Wr=e,Nt.killTweensOf(C,G,e.globalTime(t)),Q=!e.parent,Wr=0),e._pt&&l&&(gd[L.id]=1)}N&&Vd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,f&&t<=0&&y.render(vi,!0,!0)},oT=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,u;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(h=f[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Md=1,e.vars[t]="+=0",Bd(e,o),Md=0,l?ll(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=kt(n)+gn(d.e)),d.b&&(d.b=h.s+gn(d.b))},lT=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Pa({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},cT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(wn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},al=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):an(e)&&~e.indexOf("random(")?Na(e):e},m_=Pd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",g_={};Fn(m_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return g_[r]=1});Xt=(function(r){Hg(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:rl(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Nt,v=(wn(n)||Xg(n)?vr(n[0]):"length"in i)?[n]:yi(n),b,y,w,A,x,S,P,C;if(o._targets=v.length?Id(v):ll("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||f||qh(c)||qh(h)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(b=o.timeline=new Tn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),b.kill(),b.parent=b._dp=_r(o),b._start=0,f||qh(c)||qh(h)){if(A=v.length,P=f&&s_(f),Qi(f))for(x in f)~m_.indexOf(x)&&(C||(C={}),C[x]=f[x]);for(y=0;y<A;y++)w=Qh(i,g_),w.stagger=0,N&&(w.easeReverse=N),C&&Pa(w,C),S=v[y],w.duration=+al(c,_r(o),y,S,v),w.delay=(+al(h,_r(o),y,S,v)||0)-o._delay,!f&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),b.to(S,w,P?P(y,S,v):0),b._ease=ot.none;b.duration()?c=h=0:o.timeline=0}else if(m){rl(oi(b.vars.defaults,{ease:"none"})),b._ease=gs(m.ease||i.ease||"none");var L=0,z,I,G;if(wn(m))m.forEach(function(X){return b.to(v,X,">")}),b.duration();else{w={};for(x in m)x==="ease"||x==="easeEach"||cT(x,m[x],w,m.easeEach);for(x in w)for(z=w[x].sort(function(X,O){return X.t-O.t}),L=0,y=0;y<z.length;y++)I=z[y],G={ease:I.e,duration:(I.t-(y?z[y-1].t:0))/100*c},G[x]=I.v,b.to(v,G,L),L+=G.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return u===!0&&!Td&&(Wr=_r(o),Nt.killTweensOf(v),Wr=0),Ki(g,_r(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!m&&o._start===Dt(g._time)&&Jn(d)&&zb(_r(o))&&g.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-h)||0)),p&&t_(_r(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-wt&&!h?l:i<wt?0:i,f,u,m,_,p,g,v,b;if(!c)Gb(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=Dt(d%_),d===l?(m=this._repeat,f=c):(p=Dt(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Ia(this._tTime,_),f===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Dt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(n_(this,h?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var w=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(si(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&_d(this,i,s,a),si(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&_d(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Yr(this,1),!s&&!(h&&!o)&&(d||o||g)&&(si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){hl||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Bd(this,c),h=this._ease(c/this._dur),oT(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(su(this,0),this.parent||jg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?nl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wr&&Wr.vars.overwrite!==!0)._first||nl(this),this.parent&&a!==this.timeline.totalDuration()&&La(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?yi(i):o,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!s||s==="all")&&Fb(o,l))return s==="all"&&(this._pt=0),nl(this);for(d=this._op=this._op||[],s!=="all"&&(an(s)&&(_={},Fn(s,function(v){return _[v]=1}),s=_),s=lT(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],s==="all"?(d[g]=s,m=f,u={}):(u=d[g]=d[g]||{},m=s);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&iu(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&nl(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return sl(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return sl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Nt.killTweensOf(i,s,a)},e})(ul);oi(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new Tn,t=vd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});zd=function(e,t,n){return e[t]=n},__=function(e,t,n){return e[t](n)},hT=function(e,t,n,i){return e[t](i.fp,n)},uT=function(e,t,n){return e.setAttribute(t,n)},au=function(e,t){return zt(e[t])?__:tu(e[t])&&e.setAttribute?uT:zd},x_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},kd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Gd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dT=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},pT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?iu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},mT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Vd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Bn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||x_,this.d=l||this,this.set=c||zd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=mT,this.m=n,this.mt=s,this.tween=i},r})();Fn(Pd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Rd[r]=1});ai.TweenMax=ai.TweenLite=Xt;ai.TimelineLite=ai.TimelineMax=Tn;Nt=new Tn({sortChildren:!1,defaults:ol,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=Nd;_s=[],Jh={},gT=[],Vg=0,_T=0,fd=function(e){return(Jh[e]||gT).map(function(t){return t()})},bd=function(){var e=Date.now(),t=[];e-Vg>2&&(fd("matchMediaInit"),_s.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=$i.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),fd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Vg=e,fd("matchMedia"))},v_=(function(){function r(t,n){this.selector=n&&yd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_T++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var a=this,o=function(){var c=It,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=yd(s)),It=a,d=i.apply(a,arguments),zt(d)&&a._r.push(d),It=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=_s.length;a--;)_s[a].id===this.id&&_s.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),xT=(function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Qi(n)||(n={matches:n});var a=new v_(0,s||this.scope),o=a.conditions={},l,c,h;It&&!a.selector&&(a.selector=It.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=$i.matchMedia(n[c]),l&&(_s.indexOf(a)<0&&_s.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(bd):l.addEventListener("change",bd)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),eu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return u_(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){an(e)&&(e=yi(e)[0]);var s=qr(e||{}).get,a=n?Qg:Kg;return n==="native"&&(n=""),e&&(t?a((Yn[t]&&Yn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Yn[o]&&Yn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=yi(e),e.length>1){var i=e.map(function(h){return En.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=Yn[t],o=qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;Ra._pt=0,d.init(e,n?h+n:h,Ra,0,[e]),d.render(1,d),Ra._pt&&Gd(1,Ra)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=En.to(e,oi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gs(e.ease,ol.ease)),Fg(ol,e||{})},config:function(e){return Fg($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yn[o]&&!ai[o]&&ll(t+" effect requires "+o+" plugin.")}),ld[t]=function(o,l,c){return n(yi(o),oi(l||{},s),c)},a&&(Tn.prototype[t]=function(o,l,c){return this.add(ld[t](o,Qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=gs(t)},parseEase:function(e,t){return arguments.length?gs(e,t):ot},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=Jn(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Xt&&i.vars.onComplete===i._targets[0]))&&Ki(n,i,i._start-i._delay),i=s;return Ki(Nt,n,0),n},context:function(e,t){return e?new v_(e,t):It},matchMedia:function(e){return new xT(e)},matchMediaRefresh:function(){return _s.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bd()},addEventListener:function(e,t){var n=Jh[e]||(Jh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Jb,wrapYoyo:$b,distribute:s_,random:o_,snap:a_,normalize:Zb,getUnit:gn,clamp:Wb,splitColor:f_,toArray:yi,selector:yd,mapRange:c_,pipe:qb,unitize:Yb,interpolate:Kb,shuffle:r_},install:Yg,effects:ld,ticker:Zn,updateRoot:Tn.updateRoot,plugins:Yn,globalTimeline:Nt,core:{PropTween:Bn,globals:Zg,Tween:Xt,Timeline:Tn,Animation:ul,getCache:qr,_removeLinkedListItem:iu,reverting:function(){return mn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return Td=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return eu[r]=Xt[r]});Zn.add(Tn.updateRoot);Ra=eu.to({},{duration:0});vT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yT=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=vT(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},dd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(an(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}yT(o,s)}}}},En=eu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},dd("roundProps",Sd),dd("modifiers"),dd("snap",a_))||eu;Xt.version=Tn.version=En.version="3.15.0";qg=1;wd()&&Da();ST=ot.Power0,MT=ot.Power1,bT=ot.Power2,TT=ot.Power3,wT=ot.Power4,ET=ot.Linear,AT=ot.Quad,CT=ot.Cubic,RT=ot.Quart,PT=ot.Quint,IT=ot.Strong,LT=ot.Elastic,DT=ot.Back,NT=ot.SteppedEase,UT=ot.Bounce,OT=ot.Sine,FT=ot.Expo,BT=ot.Circ});var y_,Jr,Oa,Jd,Ts,zT,S_,$d,kT,Sr,bs,Fa,Ua,M_,Kd,GT,VT,ji,Xd,HT,WT,XT,qT,P_,I_,YT,ZT,JT,$T,KT,QT,Ut,Kn,jT,L_,e1,D_,N_,qd,li,b_,Ba,Yd,T_,w_,U_,O_,Kr,$r,E_,t1,Qr,yr,n1,A_,i1,r1,ou,pl,F_,B_,C_,Qd,Zd,ml,lu,Wd,s1,Ss,dl,Ms,z_,a1,o1,R_,l1,jd,k_=Rr(()=>{Hd();kT=function(){return typeof window<"u"},Sr={},bs=180/Math.PI,Fa=Math.PI/180,Ua=Math.atan2,M_=1e8,Kd=/([A-Z])/g,GT=/(left|right|width|margin|padding|x)/i,VT=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},P_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},I_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YT=function(e,t,n){return e.style[t]=n},ZT=function(e,t,n){return e.style.setProperty(t,n)},JT=function(e,t,n){return e._gsap[t]=n},$T=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},KT=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},QT=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ut="transform",Kn=Ut+"Origin",jT=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Sr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=yr(i,o)}):this.tfm[e]=a.x?a[e]:yr(i,e),e===Kn&&(this.tfm.zOrigin=a.zOrigin);else return ji.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},L_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},e1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$d(),(!s||!s.isStart)&&!n[Ut]&&(L_(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},D_=function(e,t){var n={target:e,props:[],revert:e1,save:jT};return e._gsap||En.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},qd=function(e,t){var n=Jr.createElementNS?Jr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Jr.createElement(e);return n&&n.style?n:Jr.createElement(e)},li=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Kd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ba(t)||t,1)||""},b_="O,Moz,ms,Ms,Webkit".split(","),Ba=function(e,t,n){var i=t||Ts,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(b_[a]+e in s););return a<0?null:(a===3?"ms":a>=0?b_[a]:"")+e},Yd=function(){kT()&&window.document&&(y_=window,Jr=y_.document,Oa=Jr.documentElement,Ts=qd("div")||{style:{}},zT=qd("div"),Ut=Ba(Ut),Kn=Ut+"Origin",Ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",N_=!!Ba("perspective"),$d=En.core.reverting,Jd=1)},T_=function(e){var t=e.ownerSVGElement,n=qd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Oa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Oa.removeChild(n),s},w_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},U_=function(e){var t,n;try{t=e.getBBox()}catch{t=T_(e),n=1}return t&&(t.width||t.height)||n||(t=T_(e)),t&&!t.width&&!t.x&&!t.y?{x:+w_(e,["x","cx","x1"])||0,y:+w_(e,["y","cy","y1"])||0,width:0,height:0}:t},O_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&U_(e))},Kr=function(e,t){if(t){var n=e.style,i;t in Sr&&t!==Kn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Kd,"-$1").toLowerCase())):n.removeAttribute(t)}},$r=function(e,t,n,i,s,a){var o=new Bn(e._pt,t,n,0,1,a?I_:P_);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},E_={deg:1,rad:1,turn:1},t1={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ts.style,l=GT.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,_,p,g;if(i===a||!s||E_[i]||E_[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&O_(e),(u||a==="%")&&(Sr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[h],kt(u?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Jr||!_.appendChild)&&(_=Jr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Zn.time&&!p.uncache)return kt(s/p.width*d);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,m=e[h],v?e.style[t]=v:Kr(e,t)}else(u||a==="%")&&!t1[li(_,"display")]&&(o.position=li(e,"position")),_===e&&(o.position="static"),_.appendChild(Ts),m=Ts[h],_.removeChild(Ts),o.position="absolute";return l&&u&&(p=qr(_),p.time=Zn.time,p.width=_[h]),kt(f?m*s/d:m&&s?d/m*s:0)},yr=function(e,t,n,i){var s;return Jd||Yd(),t in ji&&t!=="transform"&&(t=ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),Sr[t]&&t!=="transform"?(s=ml(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:lu(li(e,Kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ou[t]&&ou[t](e,t,n)||li(e,t)||Ld(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},n1=function(e,t,n,i){if(!n||n==="none"){var s=Ba(t,e,1),a=s&&li(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=li(e,"borderTopColor"))}var o=new Bn(this._pt,e.style,t,0,1,kd),l=0,c=0,h,d,f,u,m,_,p,g,v,b,y,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=li(e,t)||i,_?e.style[t]=_:Kr(e,t)),h=[n,i],Nd(h),n=h[0],i=h[1],f=n.match(xs)||[],w=i.match(xs)||[],w.length){for(;d=xs.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=vs(u,p)+y),g=parseFloat(p),b=p.substr((g+"").length),l=xs.lastIndex-b.length,b||(b=b||$n.units[t]||y,l===i.length&&(i+=b,o.e+=b)),y!==b&&(u=Qr(e,t,_,b)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?I_:P_;return Ad.test(i)&&(o.e=0),this._pt=o,o},A_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},i1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=A_[n]||n,t[1]=A_[i]||i,t.join(" ")},r1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Sr[o]&&(l=1,o=o==="transformOrigin"?Kn:Ut),Kr(n,o);l&&(Kr(n,Ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ml(n,1),a.uncache=1,L_(i)))}},ou={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Bn(e._pt,t,n,0,0,r1);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},pl=[1,0,0,1,0,0],F_={},B_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},C_=function(e){var t=li(e,Ut);return B_(t)?pl:t.substr(7).match(Ed).map(kt)},Qd=function(e,t){var n=e._gsap||qr(e),i=e.style,s=C_(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?pl:s):(s===pl&&!e.offsetParent&&e!==Oa&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Oa.appendChild(e)),s=C_(e),l?i.display=l:Kr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Oa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zd=function(e,t,n,i,s,a){var o=e._gsap,l=s||Qd(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],b=t.split(" "),y=parseFloat(b[0])||0,w=parseFloat(b[1])||0,A,x,S,P;n?l!==pl&&(x=u*p-m*_)&&(S=y*(p/x)+w*(-_/x)+(_*v-p*g)/x,P=y*(-m/x)+w*(u/x)-(u*v-m*g)/x,y=S,w=P):(A=U_(e),y=A.x+(~b[0].indexOf("%")?y/100*A.width:y),w=A.y+(~(b[1]||b[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&o.smooth?(g=y-c,v=w-h,o.xOffset=d+(g*u+v*_)-g,o.yOffset=f+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Kn]="0px 0px",a&&($r(a,o,"xOrigin",c,y),$r(a,o,"yOrigin",h,w),$r(a,o,"xOffset",d,o.xOffset),$r(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},ml=function(e,t){var n=e._gsap||new Ud(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=li(e,Kn)||"0",h,d,f,u,m,_,p,g,v,b,y,w,A,x,S,P,C,N,L,z,I,G,X,O,Q,q,E,V,te,le,k,j;return h=d=f=_=p=g=v=b=y=0,u=m=1,n.svg=!!(e.getCTM&&O_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),x=Qd(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Zd(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,x)),w=n.xOrigin||0,A=n.yOrigin||0,x!==pl&&(N=x[0],L=x[1],z=x[2],I=x[3],h=G=x[4],d=X=x[5],x.length===6?(u=Math.sqrt(N*N+L*L),m=Math.sqrt(I*I+z*z),_=N||L?Ua(L,N)*bs:0,v=z||I?Ua(z,I)*bs+_:0,v&&(m*=Math.abs(Math.cos(v*Fa))),n.svg&&(h-=w-(w*N+A*z),d-=A-(w*L+A*I))):(j=x[6],le=x[7],E=x[8],V=x[9],te=x[10],k=x[11],h=x[12],d=x[13],f=x[14],S=Ua(j,te),p=S*bs,S&&(P=Math.cos(-S),C=Math.sin(-S),O=G*P+E*C,Q=X*P+V*C,q=j*P+te*C,E=G*-C+E*P,V=X*-C+V*P,te=j*-C+te*P,k=le*-C+k*P,G=O,X=Q,j=q),S=Ua(-z,te),g=S*bs,S&&(P=Math.cos(-S),C=Math.sin(-S),O=N*P-E*C,Q=L*P-V*C,q=z*P-te*C,k=I*C+k*P,N=O,L=Q,z=q),S=Ua(L,N),_=S*bs,S&&(P=Math.cos(S),C=Math.sin(S),O=N*P+L*C,Q=G*P+X*C,L=L*P-N*C,X=X*P-G*C,N=O,G=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=kt(Math.sqrt(N*N+L*L+z*z)),m=kt(Math.sqrt(X*X+j*j)),S=Ua(G,X),v=Math.abs(S)>2e-4?S*bs:0,y=k?1/(k<0?-k:k):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!B_(li(e,Ut)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=kt(u),n.scaleY=kt(m),n.rotation=kt(_)+o,n.rotationX=kt(p)+o,n.rotationY=kt(g)+o,n.skewX=v+o,n.skewY=b+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Kn]=lu(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?a1:N_?z_:s1,n.uncache=0,n},lu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wd=function(e,t,n){var i=gn(t);return kt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},s1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,z_(e,t)},Ss="0deg",dl="0px",Ms=") ",z_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,b=n.zOrigin,y="",w=g==="auto"&&e&&e!==1||g===!0;if(b&&(d!==Ss||h!==Ss)){var A=parseFloat(h)*Fa,x=Math.sin(A),S=Math.cos(A),P;A=parseFloat(d)*Fa,P=Math.cos(A),a=Wd(v,a,x*P*-b),o=Wd(v,o,-Math.sin(A)*-b),l=Wd(v,l,S*P*-b+b)}p!==dl&&(y+="perspective("+p+Ms),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(w||a!==dl||o!==dl||l!==dl)&&(y+=l!==dl||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ms),c!==Ss&&(y+="rotate("+c+Ms),h!==Ss&&(y+="rotateY("+h+Ms),d!==Ss&&(y+="rotateX("+d+Ms),(f!==Ss||u!==Ss)&&(y+="skew("+f+", "+u+Ms),(m!==1||_!==1)&&(y+="scale("+m+", "+_+Ms),v.style[Ut]=y||"translate(0, 0)"},a1=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,b=parseFloat(a),y=parseFloat(o),w,A,x,S,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Fa,c*=Fa,w=Math.cos(l)*d,A=Math.sin(l)*d,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=Fa,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,S*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),w*=P,A*=P)),w=kt(w),A=kt(A),x=kt(x),S=kt(S)):(w=d,S=f,A=x=0),(b&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(b=Qr(u,"x",a,"px"),y=Qr(u,"y",o,"px")),(m||_||p||g)&&(b=kt(b+m-(m*w+_*x)+p),y=kt(y+_-(m*A+_*S)+g)),(i||s)&&(P=u.getBBox(),b=kt(b+i/100*P.width),y=kt(y+s/100*P.height)),P="matrix("+w+","+A+","+x+","+S+","+b+","+y+")",u.setAttribute("transform",P),v&&(u.style[Ut]=P)},o1=function(e,t,n,i,s){var a=360,o=an(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?bs:1),c=l-i,h=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*M_)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*M_)%a-~~(c/a)*a)),e._pt=f=new Bn(e._pt,t,n,i,c,HT),f.e=h,f.u="deg",e._props.push(n),f},R_=function(e,t){for(var n in t)e[n]=t[n];return e},l1=function(e,t,n){var i=R_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ut]=t,o=ml(n,1),Kr(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],a[Ut]=t,o=ml(n,1),a[Ut]=c);for(l in Sr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(u=gn(c),m=gn(h),d=u!==m?Qr(n,l,c,m):parseFloat(c),f=parseFloat(h),e._pt=new Bn(e._pt,o,l,d,f-d,Xd),e._pt.u=m||0,e._props.push(l));R_(o,i)};Fn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ou[e>1?"border"+r:r]=function(o,l,c,h,d){var f,u;if(arguments.length<4)return f=a.map(function(m){return yr(o,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},a.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,u,d)}});jd={name:"css",register:Yd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,f,u,m,_,p,g,v,b,y,w,A,x,S,P;Jd||Yd(),this.styles=this.styles||D_(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Yn[_]&&Fd(_,t,n,i,e,s)))){if(u=typeof h,m=ou[_],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Na(h)),m)m(this,e,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",xr.lastIndex=0,xr.test(c)||(p=gn(c),g=gn(h),g?p!==g&&(c=Qr(e,_,c,g)+g):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),S.push(_,0,o[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],an(c)&&~c.indexOf("random(")&&(c=Na(c)),gn(c+"")||c==="auto"||(c+=$n.units[_]||gn(yr(e,_))||""),(c+"").charAt(1)==="="&&(c=yr(e,_))):c=yr(e,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in ji&&(_==="autoAlpha"&&(f===1&&yr(e,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,o.visibility),$r(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ji[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Sr,b){if(this.styles.save(_),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=li(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=h,h=li(e,"perspective"),C?e.style.perspective=C:Kr(e,"perspective")}d=parseFloat(h)}if(y||(w=e._gsap,w.renderTransform&&!t.parseTransform||ml(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new Bn(this._pt,o,Ut,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new Bn(this._pt,w,"scaleY",w.scaleY,(v?vs(w.scaleY,v+d):d)-w.scaleY||0,Xd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(Kn,0,o[Kn]),h=i1(h),w.svg?Zd(e,h,0,A,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==w.zOrigin&&$r(this,w,"zOrigin",w.zOrigin,g),$r(this,o,_,lu(c),lu(h)));continue}else if(_==="svgOrigin"){Zd(e,h,1,A,0,this);continue}else if(_ in F_){o1(this,w,_,f,v?vs(f,v+h):h);continue}else if(_==="smoothOrigin"){$r(this,w,"smooth",w.smooth,h);continue}else if(_==="force3D"){w[_]=h;continue}else if(_==="transform"){l1(this,h,e);continue}}else _ in o||(_=Ba(_)||_);if(b||(d||d===0)&&(f||f===0)&&!VT.test(h)&&_ in o)p=(c+"").substr((f+"").length),d||(d=0),g=gn(h)||(_ in $n.units?$n.units[_]:p),p!==g&&(f=Qr(e,_,c,g)),this._pt=new Bn(this._pt,b?w:o,_,f,(v?vs(f,v+d):d)-f,!b&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?qT:Xd),this._pt.u=g||0,b&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=XT):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=WT);else if(_ in o)n1.call(this,e,_,c,v?v+h:h);else if(_ in e)this.add(e,_,c||e[_],v?v+h:h,i,s);else if(_!=="parseTransform"){nu(_,h);continue}b||(_ in o?S.push(_,0,o[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),a.push(_)}}x&&Vd(this)},render:function(e,t){if(t.tween._time||!$d())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:yr,aliases:ji,getSetter:function(e,t,n){var i=ji[t];return i&&i.indexOf(",")<0&&(t=i),t in Sr&&t!==Kn&&(e._gsap.x||yr(e,"x"))?n&&S_===n?t==="scale"?$T:JT:(S_=n||{})&&(t==="scale"?KT:QT):e.style&&!tu(e.style[t])?YT:~t.indexOf("-")?ZT:au(e,t)},core:{_removeProperty:Kr,_getMatrix:Qd}};En.utils.checkPrefix=Ba;En.core.getStyleSaver=D_;(function(r,e,t,n){var i=Fn(r+","+e+","+t,function(s){Sr[s]=1});Fn(e,function(s){$n.units[s]="deg",F_[s]=1}),ji[i[13]]=r+","+e,Fn(n,function(s){var a=s.split(":");ji[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});En.registerPlugin(jd)});var ep,tC,G_=Rr(()=>{Hd();k_();ep=En.registerPlugin(jd)||En,tC=ep.core.Tween});function V_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function c1(r,e,t){return e&&V_(r.prototype,e),t&&V_(r,t),r}var _n,uu,h1,ci,jr,es,ka,W_,ws,Ga,X_,Mr,Di,q_,Y_,Z_,za,$e,Ni,_l,tp,u1,Tr,xl,kn,zn,cu,hu,np,fu,An,Qt,Gn,f1,br,du,gl,H_,J_,$_,Gt,K_=Rr(()=>{Y_=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Z_=1,za=[],$e=[],Ni=[],_l=Date.now,tp=function(e,t){return t},u1=function(){var e=Ga.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,$e),i.push.apply(i,Ni),$e=n,Ni=i,tp=function(a,o){return t[a](o)}},Tr=function(e,t){return~Ni.indexOf(e)&&Ni[Ni.indexOf(e)+1][t]},xl=function(e){return!!~X_.indexOf(e)},kn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cu="scrollLeft",hu="scrollTop",np=function(){return Mr&&Mr.isPressed||$e.cache++},fu=function(e,t){var n=function i(s){if(s||s===0){Z_&&(ci.history.scrollRestoration="manual");var a=Mr&&Mr.isPressed;s=i.v=Math.round(s)||(Mr&&Mr.iOS?1:0),e(s),i.cacheID=$e.cache,a&&tp("ss",s)}else(t||$e.cache!==i.cacheID||tp("ref"))&&(i.cacheID=$e.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:cu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fu(function(r){return arguments.length?ci.scrollTo(r,Qt.sc()):ci.pageXOffset||jr[cu]||es[cu]||ka[cu]||0})},Qt={s:hu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:fu(function(r){return arguments.length?ci.scrollTo(An.sc(),r):ci.pageYOffset||jr[hu]||es[hu]||ka[hu]||0})},Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},f1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},br=function(e,t){var n=t.s,i=t.sc;xl(e)&&(e=jr.scrollingElement||es);var s=$e.indexOf(e),a=i===Qt.sc?1:2;!~s&&(s=$e.push(e)-1),$e[s+a]||kn(e,"scroll",np);var o=$e[s+a],l=o||($e[s+a]=fu(Tr(e,n),!0)||(xl(e)?i:fu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),l},du=function(e,t,n){var i=e,s=e,a=_l(),o=a,l=t||50,c=Math.max(500,l*3),h=function(m,_){var p=_l();_||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(m){var _=o,p=s,g=_l();return(m||m===0)&&m!==i&&h(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-_)*1e3};return{update:h,reset:d,getVelocity:f}},gl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},H_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},J_=function(){Ga=_n.core.globals().ScrollTrigger,Ga&&Ga.core&&u1()},$_=function(e){return _n=e||Y_(),!uu&&_n&&typeof document<"u"&&document.body&&(ci=window,jr=document,es=jr.documentElement,ka=jr.body,X_=[ci,jr,es,ka],h1=_n.utils.clamp,q_=_n.core.context||function(){},ws="onpointerenter"in ka?"pointer":"mouse",W_=Gt.isTouch=ci.matchMedia&&ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=Gt.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Z_=0},500),uu=1),Ga||J_(),uu};An.op=Qt;$e.cache=0;Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){uu||$_(_n)||console.warn("Please gsap.registerPlugin(Observer)"),Ga||J_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,b=n.onPress,y=n.onRelease,w=n.onRight,A=n.onLeft,x=n.onUp,S=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,L=n.onToggleX,z=n.onToggleY,I=n.onHover,G=n.onHoverEnd,X=n.onMove,O=n.ignoreCheck,Q=n.isNormalizer,q=n.onGestureStart,E=n.onGestureEnd,V=n.onWheel,te=n.onEnable,le=n.onDisable,k=n.onClick,j=n.scrollSpeed,oe=n.capture,pe=n.allowClicks,ce=n.lockAxis,Re=n.onLockAxis;this.target=o=Gn(o)||es,this.vars=n,u&&(u=_n.utils.toArray(u)),i=i||1e-9,s=s||0,m=m||1,j=j||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ci.getComputedStyle(ka).lineHeight)||22);var Ye,we,Fe,Ce,Pe,st,lt,$=this,et=0,qt=0,vt=n.passive||!h&&n.passive!==!1,at=br(o,An),Ot=br(o,Qt),Vt=at(),B=Ot(),ft=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Di[0]==="pointerdown",ct=xl(o),He=o.ownerDocument||jr,ge=[0,0,0],ut=[0,0,0],Ue=0,ze=function(){return Ue=_l()},R=function(ve,ae){return($.event=ve)&&u&&f1(ve.target,u)||ae&&ft&&ve.pointerType!=="touch"||O&&O(ve,ae)},M=function(){$._vx.reset(),$._vy.reset(),we.pause(),d&&d($)},W=function(){var ve=$.deltaX=H_(ge),ae=$.deltaY=H_(ut),ie=Math.abs(ve)>=i,Se=Math.abs(ae)>=i;N&&(ie||Se)&&N($,ve,ae,ge,ut),ie&&(w&&$.deltaX>0&&w($),A&&$.deltaX<0&&A($),P&&P($),L&&$.deltaX<0!=et<0&&L($),et=$.deltaX,ge[0]=ge[1]=ge[2]=0),Se&&(S&&$.deltaY>0&&S($),x&&$.deltaY<0&&x($),C&&C($),z&&$.deltaY<0!=qt<0&&z($),qt=$.deltaY,ut[0]=ut[1]=ut[2]=0),(Ce||Fe)&&(X&&X($),Fe&&(p&&Fe===1&&p($),v&&v($),Fe=0),Ce=!1),st&&!(st=!1)&&Re&&Re($),Pe&&(V($),Pe=!1),Ye=0},he=function(ve,ae,ie){ge[ie]+=ve,ut[ie]+=ae,$._vx.update(ve),$._vy.update(ae),c?Ye||(Ye=requestAnimationFrame(W)):W()},se=function(ve,ae){ce&&!lt&&($.axis=lt=Math.abs(ve)>Math.abs(ae)?"x":"y",st=!0),lt!=="y"&&(ge[2]+=ve,$._vx.update(ve,!0)),lt!=="x"&&(ut[2]+=ae,$._vy.update(ae,!0)),c?Ye||(Ye=requestAnimationFrame(W)):W()},me=function(ve){if(!R(ve,1)){ve=gl(ve,h);var ae=ve.clientX,ie=ve.clientY,Se=ae-$.x,re=ie-$.y,Ee=$.isDragging;$.x=ae,$.y=ie,(Ee||(Se||re)&&(Math.abs($.startX-ae)>=s||Math.abs($.startY-ie)>=s))&&(Fe||(Fe=Ee?2:1),Ee||($.isDragging=!0),se(Se,re))}},ye=$.onPress=function(ue){R(ue,1)||ue&&ue.button||($.axis=lt=null,we.pause(),$.isPressed=!0,ue=gl(ue),et=qt=0,$.startX=$.x=ue.clientX,$.startY=$.y=ue.clientY,$._vx.reset(),$._vy.reset(),kn(Q?o:He,Di[1],me,vt,!0),$.deltaX=$.deltaY=0,b&&b($))},Y=$.onRelease=function(ue){if(!R(ue,1)){zn(Q?o:He,Di[1],me,!0);var ve=!isNaN($.y-$.startY),ae=$.isDragging,ie=ae&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),Se=gl(ue);!ie&&ve&&($._vx.reset(),$._vy.reset(),h&&pe&&_n.delayedCall(.08,function(){if(_l()-Ue>300&&!ue.defaultPrevented){if(ue.target.click)ue.target.click();else if(He.createEvent){var re=He.createEvent("MouseEvents");re.initMouseEvent("click",!0,!0,ci,1,Se.screenX,Se.screenY,Se.clientX,Se.clientY,!1,!1,!1,!1,0,null),ue.target.dispatchEvent(re)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&ae&&!Q&&we.restart(!0),Fe&&W(),g&&ae&&g($),y&&y($,ie)}},ne=function(ve){return ve.touches&&ve.touches.length>1&&($.isGesturing=!0)&&q(ve,$.isDragging)},de=function(){return($.isGesturing=!1)||E($)},D=function(ve){if(!R(ve)){var ae=at(),ie=Ot();he((ae-Vt)*j,(ie-B)*j,1),Vt=ae,B=ie,d&&we.restart(!0)}},ee=function(ve){if(!R(ve)){ve=gl(ve,h),V&&(Pe=!0);var ae=(ve.deltaMode===1?l:ve.deltaMode===2?ci.innerHeight:1)*m;he(ve.deltaX*ae,ve.deltaY*ae,0),d&&!Q&&we.restart(!0)}},K=function(ve){if(!R(ve)){var ae=ve.clientX,ie=ve.clientY,Se=ae-$.x,re=ie-$.y;$.x=ae,$.y=ie,Ce=!0,d&&we.restart(!0),(Se||re)&&se(Se,re)}},_e=function(ve){$.event=ve,I($)},fe=function(ve){$.event=ve,G($)},xe=function(ve){return R(ve)||gl(ve,h)&&k($)};we=$._dc=_n.delayedCall(f||.25,M).pause(),$.deltaX=$.deltaY=0,$._vx=du(0,50,!0),$._vy=du(0,50,!0),$.scrollX=at,$.scrollY=Ot,$.isDragging=$.isGesturing=$.isPressed=!1,q_(this),$.enable=function(ue){return $.isEnabled||(kn(ct?He:o,"scroll",np),a.indexOf("scroll")>=0&&kn(ct?He:o,"scroll",D,vt,oe),a.indexOf("wheel")>=0&&kn(o,"wheel",ee,vt,oe),(a.indexOf("touch")>=0&&W_||a.indexOf("pointer")>=0)&&(kn(o,Di[0],ye,vt,oe),kn(He,Di[2],Y),kn(He,Di[3],Y),pe&&kn(o,"click",ze,!0,!0),k&&kn(o,"click",xe),q&&kn(He,"gesturestart",ne),E&&kn(He,"gestureend",de),I&&kn(o,ws+"enter",_e),G&&kn(o,ws+"leave",fe),X&&kn(o,ws+"move",K)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Ce=Fe=!1,$._vx.reset(),$._vy.reset(),Vt=at(),B=Ot(),ue&&ue.type&&ye(ue),te&&te($)),$},$.disable=function(){$.isEnabled&&(za.filter(function(ue){return ue!==$&&xl(ue.target)}).length||zn(ct?He:o,"scroll",np),$.isPressed&&($._vx.reset(),$._vy.reset(),zn(Q?o:He,Di[1],me,!0)),zn(ct?He:o,"scroll",D,oe),zn(o,"wheel",ee,oe),zn(o,Di[0],ye,oe),zn(He,Di[2],Y),zn(He,Di[3],Y),zn(o,"click",ze,!0),zn(o,"click",xe),zn(He,"gesturestart",ne),zn(He,"gestureend",de),zn(o,ws+"enter",_e),zn(o,ws+"leave",fe),zn(o,ws+"move",K),$.isEnabled=$.isPressed=$.isDragging=!1,le&&le($))},$.kill=$.revert=function(){$.disable();var ue=za.indexOf($);ue>=0&&za.splice(ue,1),Mr===$&&(Mr=0)},za.push($),Q&&xl(o)&&(Mr=$),$.enable(_)},c1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.15.0";Gt.create=function(r){return new Gt(r)};Gt.register=$_;Gt.getAll=function(){return za.slice()};Gt.getById=function(r){return za.filter(function(e){return e.vars.id===r})[0]};Y_()&&_n.registerPlugin(Gt)});var Ie,Xa,je,xt,fi,_t,gp,Ru,Ll,wl,yl,pu,Cn,Lu,cp,Hn,Q_,j_,qa,m0,ip,g0,Vn,hp,_0,x0,ts,up,_p,Ya,xp,El,fp,rp,mu,Rn,sp,bi,Sl,e0,t0,d1,n0,i0,er,Ml,v0,y0,Is,S0,M0,p1,m1,tr,gu,ui,Pn,bl,Es,vl,Va,Ha,b0,T0,vp,yp,Cs,Rs,Al,Cl,Rl,Pl,jt,Si,Ja,Sp,on,Mi,g1,r0,wr,Pu,w0,_1,Mp,x1,_u,fn,un,xu,s0,vu,Iu,Tu,yu,wu,Ke,dp,Dl,a0,Wa,ap,Tl,Ls,v1,E0,Ds,hi,A0,C0,bp,R0,Wn,Ps,o0,y1,P0,l0,As,pp,Eu,Il,Er,mp,Au,S1,op,M1,Za,Su,b1,Cu,c0,T1,h0,I0,Mu,u0,Ze,f0,lp,bu,w1,L0,E1,d0,p0,A1,D0=Rr(()=>{K_();mu=1,Rn=Date.now,sp=Rn(),bi=0,Sl=0,e0=function(e,t,n){var i=ui(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},t0=function(e,t){return t&&(!ui(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},d1=function r(){return Sl&&requestAnimationFrame(r)},n0=function(){return Lu=1},i0=function(){return Lu=0},er=function(e){return e},Ml=function(e){return Math.round(e*1e5)/1e5||0},v0=function(){return typeof window<"u"},y0=function(){return Ie||v0()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},Is=function(e){return!!~gp.indexOf(e)},S0=function(e){return(e==="Height"?xp:je["inner"+e])||fi["client"+e]||_t["client"+e]},M0=function(e){return Tr(e,"getBoundingClientRect")||(Is(e)?function(){return Cu.width=je.innerWidth,Cu.height=xp,Cu}:function(){return wr(e)})},p1=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Tr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?S0(s):e["client"+s])||0}},m1=function(e,t){return!t||~Ni.indexOf(e)?M0(e):function(){return Cu}},tr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Tr(e,n))?a()-M0(e)()[s]:Is(e)?(fi[n]||_t[n])-S0(i):e[n]-e["offset"+i])},gu=function(e,t){for(var n=0;n<qa.length;n+=3)(!t||~t.indexOf(qa[n+1]))&&e(qa[n],qa[n+1],qa[n+2])},ui=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},bl=function(e){return typeof e=="number"},Es=function(e){return typeof e=="object"},vl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Va=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ha=Math.abs,b0="left",T0="top",vp="right",yp="bottom",Cs="width",Rs="height",Al="Right",Cl="Left",Rl="Top",Pl="Bottom",jt="padding",Si="margin",Ja="Width",Sp="Height",on="px",Mi=function(e){return je.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},g1=function(e){var t=Mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},r0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wr=function(e,t){var n=t&&Mi(e)[cp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Pu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},w0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},_1=function(e){return function(t){return Ie.utils.snap(w0(e),t)}},Mp=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},x1=function(e){return function(t,n){return Mp(w0(e))(t,n.direction)}},_u=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},fn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},s0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},vu={toggleActions:"play",anticipatePin:0},Iu={top:0,left:0,center:.5,bottom:1,right:1},Tu=function(e,t){if(ui(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Iu?Iu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},yu=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,u=s.fontWeight,m=xt.createElement("div"),_=Is(n)||Tr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?_t:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,b=v?c:h,y="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Qt?vp:yp)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],wu(m,0,i,v),m},wu=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ja]=1,s["border"+o+Ja]=0,s[n.p]=t+"px",Ie.set(e,s)},Ke=[],dp={},a0=function(){return Rn()-bi>34&&(Dl||(Dl=requestAnimationFrame(Er)))},Wa=function(){(!Vn||!Vn.isPressed||Vn.startX>_t.clientWidth)&&($e.cache++,Vn?Dl||(Dl=requestAnimationFrame(Er)):Er(),bi||Ds("scrollStart"),bi=Rn())},ap=function(){x0=je.innerWidth,_0=je.innerHeight},Tl=function(e){$e.cache++,(e===!0||!Cn&&!g0&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!hp||x0!==je.innerWidth||Math.abs(je.innerHeight-_0)>je.innerHeight*.25))&&Ru.restart(!0)},Ls={},v1=[],E0=function r(){return un(Ze,"scrollEnd",r)||As(!0)},Ds=function(e){return Ls[e]&&Ls[e].map(function(t){return t()})||v1},hi=[],A0=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},C0=function(){return $e.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},bp=function(e,t){var n;for(Hn=0;Hn<Ke.length;Hn++)n=Ke[Hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));El=!0,t&&A0(t),t||Ds("revert")},R0=function(e,t){$e.cache++,(t||!Wn)&&$e.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),ui(e)&&(je.history.scrollRestoration=_p=e)},Ps=0,y1=function(){if(o0!==Ps){var e=o0=Ps;requestAnimationFrame(function(){return e===Ps&&As(!0)})}},P0=function(){_t.appendChild(Ya),xp=!Vn&&Ya.offsetHeight||je.innerHeight,_t.removeChild(Ya)},l0=function(e){return Ll(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},As=function(e,t){if(fi=xt.documentElement,_t=xt.body,gp=[je,xt,fi,_t],bi&&!e&&!El){fn(Ze,"scrollEnd",E0);return}P0(),Wn=Ze.isRefreshing=!0,El||C0();var n=Ds("refreshInit");m0&&Ze.sort(),t||bp(),$e.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ke.slice(0).forEach(function(i){return i.refresh()}),El=!1,Ke.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),fp=1,l0(!0),Ke.forEach(function(i){var s=tr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),l0(!1),fp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),$e.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),R0(_p,1),Ru.pause(),Ps++,Wn=2,Er(2),Ke.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=Ze.isRefreshing=!1,Ds("refresh")},pp=0,Eu=1,Er=function(e){if(e===2||!Wn&&!El){Ze.isUpdating=!0,Il&&Il.update(0);var t=Ke.length,n=Rn(),i=n-sp>=50,s=t&&Ke[0].scroll();if(Eu=pp>s?-1:1,Wn||(pp=s),i&&(bi&&!Lu&&n-bi>200&&(bi=0,Ds("scrollEnd")),yl=sp,sp=n),Eu<0){for(Hn=t;Hn-- >0;)Ke[Hn]&&Ke[Hn].update(0,i);Eu=1}else for(Hn=0;Hn<t;Hn++)Ke[Hn]&&Ke[Hn].update(0,i);Ze.isUpdating=!1}Dl=0},mp=[b0,T0,yp,vp,Si+Pl,Si+Al,Si+Rl,Si+Cl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Au=mp.concat([Cs,Rs,"boxSizing","max"+Ja,"max"+Sp,"position",Si,jt,jt+Rl,jt+Al,jt+Pl,jt+Cl]),S1=function(e,t,n){Za(n);var i=e._gsap;if(i.spacerIsNative)Za(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},op=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=mp.length,a=t.style,o=e.style,l;s--;)l=mp[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[yp]=o[vp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Cs]=Pu(e,An)+on,a[Rs]=Pu(e,Qt)+on,a[jt]=o[Si]=o[T0]=o[b0]="0",Za(i),o[Cs]=o["max"+Ja]=n[Cs],o[Rs]=o["max"+Sp]=n[Rs],o[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},M1=/([A-Z])/g,Za=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(M1,"-$1").toLowerCase())}},Su=function(e){for(var t=Au.length,n=e.style,i=[],s=0;s<t;s++)i.push(Au[s],n[Au[s]]);return i.t=e,i},b1=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Cu={left:0,top:0},c0=function(e,t,n,i,s,a,o,l,c,h,d,f,u,m){Pn(e)&&(e=e(l)),ui(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Tu("0"+e.substr(3),n):0));var _=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(e)||(e=+e),bl(e))u&&(e=Ie.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,e)),o&&wu(o,n,i,!0);else{Pn(t)&&(t=t(l));var b=(e||"0").split(" "),y,w,A,x;v=Gn(t,l)||_t,y=wr(v)||{},(!y||!y.left&&!y.top)&&Mi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=wr(v),x?v.style.display=x:v.style.removeProperty("display")),w=Tu(b[0],y[i.d]),A=Tu(b[1]||"0",n),e=y[i.p]-c[i.p]-h+w+s-A,o&&wu(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var S=e+n,P=a._isStart;p="scroll"+i.d2,wu(a,S,i,P&&S>20||!P&&(d?Math.max(_t[p],fi[p]):a.parentNode[p])<=S+1),d&&(c=wr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+on))}return u&&v&&(p=wr(v),u.seek(f),g=wr(v),u._caScrollDist=p[i.p]-g[i.p],e=e/u._caScrollDist*f),u&&u.seek(_),u?e:Math.round(e)},T1=/(webkit|moz|length|cssText|inset)/i,h0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===_t){e._stOrig=s.cssText,o=Mi(e);for(a in o)!+a&&!T1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},I0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Mu=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},u0=function(e,t){var n=br(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,d){var f=a.tween,u=l.onComplete,m={};c=c||n();var _=I0(n,c,function(){f.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){$e.cache++,a.tween&&Er()},l.onComplete=function(){a.tween=0,u&&u.call(f)},f=a.tween=Ie.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",n.wheelHandler),Ze.isTouch&&fn(e,"touchmove",n.wheelHandler),s},Ze=(function(){function r(t,n){Xa||r.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),up(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sl){this.update=this.refresh=this.kill=er;return}n=r0(ui(n)||bl(n)||n.nodeType?{trigger:n}:n,vu);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,u=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,b=s.once,y=s.snap,w=s.pinReparent,A=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,P=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Qt,N=!d&&d!==0,L=Gn(n.scroller||je),z=Ie.core.getCache(L),I=Is(L),G=("pinType"in n?n.pinType:Tr(L,"pinType")||I&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=N&&n.toggleActions.split(" "),Q="markers"in n?n.markers:vu.markers,q=I?0:parseFloat(Mi(L)["border"+C.p2+Ja])||0,E=this,V=n.onRefreshInit&&function(){return n.onRefreshInit(E)},te=p1(L,I,C),le=m1(L,I),k=0,j=0,oe=0,pe=br(L,C),ce,Re,Ye,we,Fe,Ce,Pe,st,lt,$,et,qt,vt,at,Ot,Vt,B,ft,ct,He,ge,ut,Ue,ze,R,M,W,he,se,me,ye,Y,ne,de,D,ee,K,_e,fe;if(E._startClamp=E._endClamp=!1,E._dir=C,p*=45,E.scroller=L,E.scroll=x?x.time.bind(x):pe,we=pe(),E.vars=n,i=i||n.animation,"refreshPriority"in n&&(m0=1,n.refreshPriority===-9999&&(Il=E)),z.tweenScroll=z.tweenScroll||{top:u0(L,Qt),left:u0(L,An)},E.tweenTo=ce=z.tweenScroll[C.p],E.scrubDuration=function(ie){ne=bl(ie)&&ie,ne?Y?Y.duration(ie):Y=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ne,paused:!0,onComplete:function(){return g&&g(E)}}):(Y&&Y.progress(1).kill(),Y=0)},i&&(i.vars.lazy=!1,i._initted&&!E.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),E.animation=i.pause(),i.scrollTrigger=E,E.scrubDuration(d),me=0,l||(l=i.vars.id)),y&&((!Es(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _t.style&&Ie.set(I?[_t,fi]:L,{scrollBehavior:"auto"}),$e.forEach(function(ie){return Pn(ie)&&ie.target===(I?xt.scrollingElement||fi:L)&&(ie.smooth=!1)}),Ye=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?_1(i):y.snapTo==="labelsDirectional"?x1(i):y.directional!==!1?function(ie,Se){return Mp(y.snapTo)(ie,Rn()-j<500?0:Se.direction)}:Ie.utils.snap(y.snapTo),de=y.duration||{min:.1,max:2},de=Es(de)?wl(de.min,de.max):wl(de,de),D=Ie.delayedCall(y.delay||ne/2||.1,function(){var ie=pe(),Se=Rn()-j<500,re=ce.tween;if((Se||Math.abs(E.getVelocity())<10)&&!re&&!Lu&&k!==ie){var Ee=(ie-Ce)/at,tt=i&&!N?i.totalProgress():Ee,Xe=Se?0:(tt-ye)/(Rn()-yl)*1e3||0,Ct=Ie.utils.clamp(-Ee,1-Ee,Ha(Xe/2)*Xe/.185),Yt=Ee+(y.inertia===!1?0:Ct),Rt,yt,mt=y,en=mt.onStart,St=mt.onInterrupt,xn=mt.onComplete;if(Rt=Ye(Yt,E),bl(Rt)||(Rt=Yt),yt=Math.max(0,Math.round(Ce+Rt*at)),ie<=Pe&&ie>=Ce&&yt!==ie){if(re&&!re._initted&&re.data<=Ha(yt-ie))return;y.inertia===!1&&(Ct=Rt-Ee),ce(yt,{duration:de(Ha(Math.max(Ha(Yt-tt),Ha(Rt-tt))*.185/Xe/.05||0)),ease:y.ease||"power3",data:Ha(yt-ie),onInterrupt:function(){return D.restart(!0)&&St&&Va(E,St)},onComplete:function(){E.update(),k=pe(),i&&!N&&(Y?Y.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),me=ye=i&&!N?i.totalProgress():E.progress,v&&v(E),xn&&Va(E,xn)}},ie,Ct*at,yt-ie-Ct*at),en&&Va(E,en,ce.tween)}}else E.isActive&&k!==ie&&D.restart(!0)}).pause()),l&&(dp[l]=E),f=E.trigger=Gn(f||u!==!0&&u),fe=f&&f._gsap&&f._gsap.stRevert,fe&&(fe=fe(E)),u=u===!0?f:Gn(u),ui(o)&&(o={targets:f,className:o}),u&&(m===!1||m===Si||(m=!m&&u.parentNode&&u.parentNode.style&&Mi(u.parentNode).display==="flex"?!1:jt),E.pin=u,Re=Ie.core.getCache(u),Re.spacer?Ot=Re.pinState:(A&&(A=Gn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Re.spacerIsNative=!!A,A&&(Re.spacerState=Su(A))),Re.spacer=ft=A||xt.createElement("div"),ft.classList.add("pin-spacer"),l&&ft.classList.add("pin-spacer-"+l),Re.pinState=Ot=Su(u)),n.force3D!==!1&&Ie.set(u,{force3D:!0}),E.spacer=ft=Re.spacer,se=Mi(u),ze=se[m+C.os2],He=Ie.getProperty(u),ge=Ie.quickSetter(u,C.a,on),op(u,ft,se),B=Su(u)),Q){qt=Es(Q)?r0(Q,s0):s0,$=yu("scroller-start",l,L,C,qt,0),et=yu("scroller-end",l,L,C,qt,0,$),ct=$["offset"+C.op.d2];var xe=Gn(Tr(L,"content")||L);st=this.markerStart=yu("start",l,xe,C,qt,ct,0,x),lt=this.markerEnd=yu("end",l,xe,C,qt,ct,0,x),x&&(_e=Ie.quickSetter([st,lt],C.a,on)),!G&&!(Ni.length&&Tr(L,"fixedMarkers")===!0)&&(g1(I?_t:L),Ie.set([$,et],{force3D:!0}),M=Ie.quickSetter($,C.a,on),he=Ie.quickSetter(et,C.a,on))}if(x){var ue=x.vars.onUpdate,ve=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){E.update(0,0,1),ue&&ue.apply(x,ve||[])})}if(E.previous=function(){return Ke[Ke.indexOf(E)-1]},E.next=function(){return Ke[Ke.indexOf(E)+1]},E.revert=function(ie,Se){if(!Se)return E.kill(!0);var re=ie!==!1||!E.enabled,Ee=Cn;re!==E.isReverted&&(re&&(ee=Math.max(pe(),E.scroll.rec||0),oe=E.progress,K=i&&i.progress()),st&&[st,lt,$,et].forEach(function(tt){return tt.style.display=re?"none":"block"}),re&&(Cn=E,E.update(re)),u&&(!w||!E.isActive)&&(re?S1(u,ft,Ot):op(u,ft,Mi(u),R)),re||E.update(re),Cn=Ee,E.isReverted=re)},E.refresh=function(ie,Se,re,Ee){if(!((Cn||!E.enabled)&&!Se)){if(u&&ie&&bi){fn(r,"scrollEnd",E0);return}!Wn&&V&&V(E),Cn=E,ce.tween&&!re&&(ce.tween.kill(),ce.tween=0),Y&&Y.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(H){return H.vars.immediateRender&&H.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),E.isReverted||E.revert(!0,!0),E._subPinOffset=!1;var tt=te(),Xe=le(),Ct=x?x.duration():tr(L,C),Yt=at<=.01||!at,Rt=0,yt=Ee||0,mt=Es(re)?re.end:n.end,en=n.endTrigger||f,St=Es(re)?re.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),xn=E.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,E),jn=f&&Math.max(0,Ke.indexOf(E))||0,Ft=jn,Zt,tn,ei,Fs,nn,Bt,di,Ka,Bl,Ar,T,U,J;for(Q&&Es(re)&&(U=Ie.getProperty($,C.p),J=Ie.getProperty(et,C.p));Ft-- >0;)Bt=Ke[Ft],Bt.end||Bt.refresh(0,1)||(Cn=E),di=Bt.pin,di&&(di===f||di===u||di===xn)&&!Bt.isReverted&&(Ar||(Ar=[]),Ar.unshift(Bt),Bt.revert(!0,!0)),Bt!==Ke[Ft]&&(jn--,Ft--);for(Pn(St)&&(St=St(E)),St=e0(St,"start",E),Ce=c0(St,f,tt,C,pe(),st,$,E,Xe,q,G,Ct,x,E._startClamp&&"_startClamp")||(u?-.001:0),Pn(mt)&&(mt=mt(E)),ui(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(ui(St)?St.split(" ")[0]:"")+mt:(Rt=Tu(mt.substr(2),tt),mt=ui(St)?St:(x?Ie.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Ce):Ce)+Rt,en=f)),mt=e0(mt,"end",E),Pe=Math.max(Ce,c0(mt||(en?"100% 0":Ct),en,tt,C,pe()+Rt,lt,et,E,Xe,q,G,Ct,x,E._endClamp&&"_endClamp"))||-.001,Rt=0,Ft=jn;Ft--;)Bt=Ke[Ft]||{},di=Bt.pin,di&&Bt.start-Bt._pinPush<=Ce&&!x&&Bt.end>0&&(Zt=Bt.end-(E._startClamp?Math.max(0,Bt.start):Bt.start),(di===f&&Bt.start-Bt._pinPush<Ce||di===xn)&&isNaN(St)&&(Rt+=Zt*(1-Bt.progress)),di===u&&(yt+=Zt));if(Ce+=Rt,Pe+=Rt,E._startClamp&&(E._startClamp+=Rt),E._endClamp&&!Wn&&(E._endClamp=Pe||-.001,Pe=Math.min(Pe,tr(L,C))),at=Pe-Ce||(Ce-=.01)&&.001,Yt&&(oe=Ie.utils.clamp(0,1,Ie.utils.normalize(Ce,Pe,ee))),E._pinPush=yt,st&&Rt&&(Zt={},Zt[C.a]="+="+Rt,xn&&(Zt[C.p]="-="+pe()),Ie.set([st,lt],Zt)),u&&!(fp&&E.end>=tr(L,C)))Zt=Mi(u),Fs=C===Qt,ei=pe(),ut=parseFloat(He(C.a))+yt,!Ct&&Pe>1&&(T=(I?xt.scrollingElement||fi:L).style,T={style:T,value:T["overflow"+C.a.toUpperCase()]},I&&Mi(_t)["overflow"+C.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+C.a.toUpperCase()]="scroll")),op(u,ft,Zt),B=Su(u),tn=wr(u,!0),Ka=G&&br(L,Fs?An:Qt)(),m?(R=[m+C.os2,at+yt+on],R.t=ft,Ft=m===jt?Pu(u,C)+at+yt:0,Ft&&(R.push(C.d,Ft+on),ft.style.flexBasis!=="auto"&&(ft.style.flexBasis=Ft+on)),Za(R),xn&&Ke.forEach(function(H){H.pin===xn&&H.vars.pinSpacing!==!1&&(H._subPinOffset=!0)}),G&&pe(ee)):(Ft=Pu(u,C),Ft&&ft.style.flexBasis!=="auto"&&(ft.style.flexBasis=Ft+on)),G&&(nn={top:tn.top+(Fs?ei-Ce:Ka)+on,left:tn.left+(Fs?Ka:ei-Ce)+on,boxSizing:"border-box",position:"fixed"},nn[Cs]=nn["max"+Ja]=Math.ceil(tn.width)+on,nn[Rs]=nn["max"+Sp]=Math.ceil(tn.height)+on,nn[Si]=nn[Si+Rl]=nn[Si+Al]=nn[Si+Pl]=nn[Si+Cl]="0",nn[jt]=Zt[jt],nn[jt+Rl]=Zt[jt+Rl],nn[jt+Al]=Zt[jt+Al],nn[jt+Pl]=Zt[jt+Pl],nn[jt+Cl]=Zt[jt+Cl],Vt=b1(Ot,nn,w),Wn&&pe(0)),i?(Bl=i._initted,ip(1),i.render(i.duration(),!0,!0),Ue=He(C.a)-ut+at+yt,W=Math.abs(at-Ue)>1,G&&W&&Vt.splice(Vt.length-2,2),i.render(0,!0,!0),Bl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ip(0)):Ue=at,T&&(T.value?T.style["overflow"+C.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+C.a));else if(f&&pe()&&!x)for(tn=f.parentNode;tn&&tn!==_t;)tn._pinOffset&&(Ce-=tn._pinOffset,Pe-=tn._pinOffset),tn=tn.parentNode;Ar&&Ar.forEach(function(H){return H.revert(!1,!0)}),E.start=Ce,E.end=Pe,we=Fe=Wn?ee:pe(),!x&&!Wn&&(we<ee&&pe(ee),E.scroll.rec=0),E.revert(!1,!0),j=Rn(),D&&(k=-1,D.restart(!0)),Cn=0,i&&N&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Yt||oe!==E.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||oe||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Ce<-.001&&!oe?Ie.utils.normalize(Ce,Pe,0):oe,!0),E.progress=Yt||(we-Ce)/at===oe?0:oe),u&&m&&(ft._pinOffset=Math.round(E.progress*Ue)),Y&&Y.invalidate(),isNaN(U)||(U-=Ie.getProperty($,C.p),J-=Ie.getProperty(et,C.p),Mu($,C,U),Mu(st,C,U-(Ee||0)),Mu(et,C,J),Mu(lt,C,J-(Ee||0))),Yt&&!Wn&&E.update(),h&&!Wn&&!vt&&(vt=!0,h(E),vt=!1)}},E.getVelocity=function(){return(pe()-Fe)/(Rn()-yl)*1e3||0},E.endAnimation=function(){vl(E.callbackAnimation),i&&(Y?Y.progress(1):i.paused()?N||vl(i,E.direction<0,1):vl(i,i.reversed()))},E.labelToScroll=function(ie){return i&&i.labels&&(Ce||E.refresh()||Ce)+i.labels[ie]/i.duration()*at||0},E.getTrailing=function(ie){var Se=Ke.indexOf(E),re=E.direction>0?Ke.slice(0,Se).reverse():Ke.slice(Se+1);return(ui(ie)?re.filter(function(Ee){return Ee.vars.preventOverlaps===ie}):re).filter(function(Ee){return E.direction>0?Ee.end<=Ce:Ee.start>=Pe})},E.update=function(ie,Se,re){if(!(x&&!re&&!ie)){var Ee=Wn===!0?ee:E.scroll(),tt=ie?0:(Ee-Ce)/at,Xe=tt<0?0:tt>1?1:tt||0,Ct=E.progress,Yt,Rt,yt,mt,en,St,xn,jn;if(Se&&(Fe=we,we=x?pe():Ee,y&&(ye=me,me=i&&!N?i.totalProgress():Xe)),p&&u&&!Cn&&!mu&&bi&&(!Xe&&Ce<Ee+(Ee-Fe)/(Rn()-yl)*p?Xe=1e-4:Xe===1&&Pe>Ee+(Ee-Fe)/(Rn()-yl)*p&&(Xe=.9999)),Xe!==Ct&&E.enabled){if(Yt=E.isActive=!!Xe&&Xe<1,Rt=!!Ct&&Ct<1,St=Yt!==Rt,en=St||!!Xe!=!!Ct,E.direction=Xe>Ct?1:-1,E.progress=Xe,en&&!Cn&&(yt=Xe&&!Ct?0:Xe===1?1:Ct===1?2:3,N&&(mt=!St&&O[yt+1]!=="none"&&O[yt+1]||O[yt],jn=i&&(mt==="complete"||mt==="reset"||mt in i))),P&&(St||jn)&&(jn||d||!i)&&(Pn(P)?P(E):E.getTrailing(P).forEach(function(ei){return ei.endAnimation()})),N||(Y&&!Cn&&!mu?(Y._dp._time-Y._start!==Y._time&&Y.render(Y._dp._time-Y._start),Y.resetTo?Y.resetTo("totalProgress",Xe,i._tTime/i._tDur):(Y.vars.totalProgress=Xe,Y.invalidate().restart())):i&&i.totalProgress(Xe,!!(Cn&&(j||ie)))),u){if(ie&&m&&(ft.style[m+C.os2]=ze),!G)ge(Ml(ut+Ue*Xe));else if(en){if(xn=!ie&&Xe>Ct&&Pe+1>Ee&&Ee+1>=tr(L,C),w)if(!ie&&(Yt||xn)){var Ft=wr(u,!0),Zt=Ee-Ce;h0(u,_t,Ft.top+(C===Qt?Zt:0)+on,Ft.left+(C===Qt?0:Zt)+on)}else h0(u,ft);Za(Yt||xn?Vt:B),W&&Xe<1&&Yt||ge(ut+(Xe===1&&!xn?Ue:0))}}y&&!ce.tween&&!Cn&&!mu&&D.restart(!0),o&&(St||b&&Xe&&(Xe<1||!rp))&&Ll(o.targets).forEach(function(ei){return ei.classList[Yt||b?"add":"remove"](o.className)}),a&&!N&&!ie&&a(E),en&&!Cn?(N&&(jn&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(E)),(St||!rp)&&(c&&St&&Va(E,c),X[yt]&&Va(E,X[yt]),b&&(Xe===1?E.kill(!1,1):X[yt]=0),St||(yt=Xe===1?1:3,X[yt]&&Va(E,X[yt]))),S&&!Yt&&Math.abs(E.getVelocity())>(bl(S)?S:2500)&&(vl(E.callbackAnimation),Y?Y.progress(1):vl(i,mt==="reverse"?1:!Xe,1))):N&&a&&!Cn&&a(E)}if(he){var tn=x?Ee/x.duration()*(x._caScrollDist||0):Ee;M(tn+($._isFlipped?1:0)),he(tn)}_e&&_e(-Ee/x.duration()*(x._caScrollDist||0))}},E.enable=function(ie,Se){E.enabled||(E.enabled=!0,fn(L,"resize",Tl),I||fn(L,"scroll",Wa),V&&fn(r,"refreshInit",V),ie!==!1&&(E.progress=oe=0,we=Fe=k=pe()),Se!==!1&&E.refresh())},E.getTween=function(ie){return ie&&ce?ce.tween:Y},E.setPositions=function(ie,Se,re,Ee){if(x){var tt=x.scrollTrigger,Xe=x.duration(),Ct=tt.end-tt.start;ie=tt.start+Ct*ie/Xe,Se=tt.start+Ct*Se/Xe}E.refresh(!1,!1,{start:t0(ie,re&&!!E._startClamp),end:t0(Se,re&&!!E._endClamp)},Ee),E.update()},E.adjustPinSpacing=function(ie){if(R&&ie){var Se=R.indexOf(C.d)+1;R[Se]=parseFloat(R[Se])+ie+on,R[1]=parseFloat(R[1])+ie+on,Za(R)}},E.disable=function(ie,Se){if(ie!==!1&&E.revert(!0,!0),E.enabled&&(E.enabled=E.isActive=!1,Se||Y&&Y.pause(),ee=0,Re&&(Re.uncache=1),V&&un(r,"refreshInit",V),D&&(D.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!I)){for(var re=Ke.length;re--;)if(Ke[re].scroller===L&&Ke[re]!==E)return;un(L,"resize",Tl),I||un(L,"scroll",Wa)}},E.kill=function(ie,Se){E.disable(ie,Se),Y&&!Se&&Y.kill(),l&&delete dp[l];var re=Ke.indexOf(E);re>=0&&Ke.splice(re,1),re===Hn&&Eu>0&&Hn--,re=0,Ke.forEach(function(Ee){return Ee.scroller===E.scroller&&(re=1)}),re||Wn||(E.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Se||i.kill()),st&&[st,lt,$,et].forEach(function(Ee){return Ee.parentNode&&Ee.parentNode.removeChild(Ee)}),Il===E&&(Il=0),u&&(Re&&(Re.uncache=1),re=0,Ke.forEach(function(Ee){return Ee.pin===u&&re++}),re||(Re.spacer=0)),n.onKill&&n.onKill(E)},Ke.push(E),E.enable(!1,!1),fe&&fe(E),i&&i.add&&!at){var ae=E.update;E.update=function(){E.update=ae,$e.cache++,Ce||Pe||E.refresh()},Ie.delayedCall(.01,E.update),at=.01,Ce=Pe=0}else E.refresh();u&&y1()},r.register=function(n){return Xa||(Ie=n||y0(),v0()&&window.document&&r.enable(),Xa=Sl),Xa},r.defaults=function(n){if(n)for(var i in n)vu[i]=n[i];return vu},r.disable=function(n,i){Sl=0,Ke.forEach(function(a){return a[i?"kill":"disable"](n)}),un(je,"wheel",Wa),un(xt,"scroll",Wa),clearInterval(pu),un(xt,"touchcancel",er),un(_t,"touchstart",er),_u(un,xt,"pointerdown,touchstart,mousedown",n0),_u(un,xt,"pointerup,touchend,mouseup",i0),Ru.kill(),gu(un);for(var s=0;s<$e.length;s+=3)xu(un,$e[s],$e[s+1]),xu(un,$e[s],$e[s+2])},r.enable=function(){if(je=window,xt=document,fi=xt.documentElement,_t=xt.body,Ie){if(Ll=Ie.utils.toArray,wl=Ie.utils.clamp,up=Ie.core.context||er,ip=Ie.core.suppressOverwrites||er,_p=je.history.scrollRestoration||"auto",pp=je.pageYOffset||0,Ie.core.globals("ScrollTrigger",r),_t){Sl=1,Ya=document.createElement("div"),Ya.style.height="100vh",Ya.style.position="absolute",P0(),d1(),Gt.register(Ie),r.isTouch=Gt.isTouch,ts=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),hp=Gt.isTouch===1,fn(je,"wheel",Wa),gp=[je,xt,fi,_t],Ie.matchMedia?(r.matchMedia=function(h){var d=Ie.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Ie.addEventListener("matchMediaInit",function(){C0(),bp()}),Ie.addEventListener("matchMediaRevert",function(){return A0()}),Ie.addEventListener("matchMedia",function(){As(0,1),Ds("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return ap(),ap})):console.warn("Requires GSAP 3.11.0 or later"),ap(),fn(xt,"scroll",Wa);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,a=Ie.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=wr(_t),Qt.m=Math.round(o.top+Qt.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),pu=setInterval(a0,250),Ie.delayedCall(.5,function(){return mu=0}),fn(xt,"touchcancel",er),fn(_t,"touchstart",er),_u(fn,xt,"pointerdown,touchstart,mousedown",n0),_u(fn,xt,"pointerup,touchend,mouseup",i0),cp=Ie.utils.checkPrefix("transform"),Au.push(cp),Xa=Rn(),Ru=Ie.delayedCall(.2,As).pause(),qa=[xt,"visibilitychange",function(){var h=je.innerWidth,d=je.innerHeight;xt.hidden?(Q_=h,j_=d):(Q_!==h||j_!==d)&&Tl()},xt,"DOMContentLoaded",As,je,"load",As,je,"resize",Tl],gu(fn),Ke.forEach(function(h){return h.enable(0,1)}),l=0;l<$e.length;l+=3)xu(un,$e[l],$e[l+1]),xu(un,$e[l],$e[l+2])}else if(xt){var c=function h(){r.enable(),xt.removeEventListener("DOMContentLoaded",h)};xt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(rp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(pu)||(pu=i)&&setInterval(a0,i),"ignoreMobileResize"in n&&(hp=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gu(un)||gu(fn,n.autoRefreshEvents||"none"),g0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Gn(n),a=$e.indexOf(s),o=Is(s);~a&&$e.splice(a,o?6:2),i&&(o?Ni.unshift(je,i,_t,i,fi,i):Ni.unshift(s,i))},r.clearMatchMedia=function(n){Ke.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ui(n)?Gn(n):n).getBoundingClientRect(),o=a[s?Cs:Rs]*i||0;return s?a.right-o>0&&a.left+o<je.innerWidth:a.bottom-o>0&&a.top+o<je.innerHeight},r.positionInViewport=function(n,i,s){ui(n)&&(n=Gn(n));var a=n.getBoundingClientRect(),o=a[s?Cs:Rs],l=i==null?o/2:i in Iu?Iu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/je.innerWidth:(a.top+l)/je.innerHeight},r.killAll=function(n){if(Ke.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ls.killAll||[];Ls={},i.forEach(function(s){return s()})}},r})();Ze.version="3.15.0";Ze.saveStyles=function(r){return r?Ll(r).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),up())}}):hi};Ze.revert=function(r,e){return bp(!r,e)};Ze.create=function(r,e){return new Ze(r,e)};Ze.refresh=function(r){return r?Tl(!0):(Xa||Ze.register())&&As(!0)};Ze.update=function(r){return++$e.cache&&Er(r===!0?2:0)};Ze.clearScrollMemory=R0;Ze.maxScroll=function(r,e){return tr(r,e?An:Qt)};Ze.getScrollFunc=function(r,e){return br(Gn(r),e?An:Qt)};Ze.getById=function(r){return dp[r]};Ze.getAll=function(){return Ke.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!bi};Ze.snapDirectional=Mp;Ze.addEventListener=function(r,e){var t=Ls[r]||(Ls[r]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(r,e){var t=Ls[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],f=[],u=Ie.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&u.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Pn(s)&&(s=s(),fn(Ze,"refresh",function(){return s=e.batchMax()})),Ll(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ze.create(c))}),t};f0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},lp=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===fi&&r(_t,t)},bu={auto:1,scroll:1},w1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ie.core.getCache(s),o=Rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bu[(l=Mi(s)).overflowY]||bu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Is(s)&&(bu[(l=Mi(s)).overflowY]||bu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},L0=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&w1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(xt,Gt.eventTypes[0],p0,!1,!0)},onDisable:function(){return un(xt,Gt.eventTypes[0],p0,!0)}})},E1=/(input|label|select|textarea)/i,p0=function(e){var t=E1.test(e.target.tagName);(t||d0)&&(e._gsapAllow=!0,d0=t)},A1=function(e){Es(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Gn(e.target)||fi,h=Ie.core.globals().ScrollSmoother,d=h&&h.get(),f=ts&&(e.content&&Gn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),u=br(c,Qt),m=br(c,An),_=1,p=(Gt.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,g=0,v=Pn(i)?function(){return i(o)}:function(){return i||2.8},b,y,w=L0(c,e.type,!0,s),A=function(){return y=!1},x=er,S=er,P=function(){l=tr(c,Qt),S=wl(ts?1:0,l),n&&(x=wl(0,tr(c,An))),b=Ps},C=function(){f._gsap.y=Ml(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(y){requestAnimationFrame(A);var Q=Ml(o.deltaY/2),q=S(u.v-Q);if(f&&q!==u.v+u.offset){u.offset=q-u.v;var E=Ml((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+E+", 0, 1)",f._gsap.y=E+"px",u.cacheID=$e.cache,Er()}return!0}u.offset&&C(),y=!0},L,z,I,G,X=function(){P(),L.isActive()&&L.vars.scrollY>l&&(u()>l?L.progress(1)&&u(l):L.resetTo("scrollY",l))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return ts&&O.type==="touchmove"&&N(O)||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=_;_=Ml((je.visualViewport&&je.visualViewport.scale||1)/p),L.pause(),O!==_&&lp(c,_>1.01?!0:n?!1:"x"),z=m(),I=u(),P(),b=Ps},e.onRelease=e.onGestureStart=function(O,Q){if(u.offset&&C(),!Q)G.restart(!0);else{$e.cache++;var q=v(),E,V;n&&(E=m(),V=E+q*.05*-O.velocityX/.227,q*=f0(m,E,V,tr(c,An)),L.vars.scrollX=x(V)),E=u(),V=E+q*.05*-O.velocityY/.227,q*=f0(u,E,V,tr(c,Qt)),L.vars.scrollY=S(V),L.invalidate().duration(q).play(.01),(ts&&L.vars.scrollY>=l||E>=l-1)&&Ie.to({},{onUpdate:X,duration:q})}a&&a(O)},e.onWheel=function(){L._ts&&L.pause(),Rn()-g>1e3&&(b=0,g=Rn())},e.onChange=function(O,Q,q,E,V){if(Ps!==b&&P(),Q&&n&&m(x(E[2]===Q?z+(O.startX-O.x):m()+Q-E[1])),q){u.offset&&C();var te=V[2]===q,le=te?I+O.startY-O.y:u()+q-V[1],k=S(le);te&&le!==k&&(I+=k-le),u(k)}(q||Q)&&Er()},e.onEnable=function(){lp(c,n?!1:"x"),Ze.addEventListener("refresh",X),fn(je,"resize",X),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),w.enable()},e.onDisable=function(){lp(c,!0),un(je,"resize",X),Ze.removeEventListener("refresh",X),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=ts,ts&&!u()&&u(1),ts&&Ie.ticker.add(er),G=o._dc,L=Ie.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:I0(u,u(),function(){return L.pause()})},onUpdate:Er,onComplete:G.vars.onComplete}),o};Ze.sort=function(r){if(Pn(r))return Ke.sort(r);var e=je.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+je.innerHeight}),Ke.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(r){return new Gt(r)};Ze.normalizeScroll=function(r){if(typeof r>"u")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var e=r instanceof Gt?r:A1(r);return Vn&&Vn.target===e.target&&Vn.kill(),Is(e.target)&&(Vn=e),e};Ze.core={_getVelocityProp:du,_inputObserver:L0,_scrollers:$e,_proxies:Ni,bridge:{ss:function(){bi||Ds("scrollStart"),bi=Rn()},ref:function(){return Cn}}};y0()&&Ie.registerPlugin(Ze)});function O0(){let r=new vo;r.name="Circuit archive",r.fog=new xo(1385831,.044);let e=new gi;e.name="Landmarks",r.add(e);let t=new ya(15068671,2.9);t.position.set(1,8,9);let n=new ya(Ui,2.2);n.position.set(-6,4,-5),r.add(t,n,new zo(14017279,1319505,1.7));let i=new cs({color:C1,roughness:.39,metalness:.48}),s=new cs({color:N0,roughness:.64,metalness:.28}),a=new Or({color:7178200}),o=new dr(1,1,1),l=new Map([Qn,Ui].map(E=>[E,new fa({color:E})])),c=new Map([Qn,Ui].map(E=>[E,new Or({color:E})]));function h(E,V,te,le=i,k=a){let j=new dr(...V),oe=new Wt(j,le);return oe.position.set(...te),k&&oe.add(new Wi(new Fr(j),k)),E.add(oe),oe}function d(E,V,te=a){let le=new Kt().setFromPoints(V.map(j=>new F(...j))),k=new da(le,te);return E.add(k),k}function f(E,V,te,le=[0,0,0],k=[0,0,0],j=U0){let oe=new Wt(new Uo(V,.013,4,56,j),te);return oe.position.set(...le),oe.rotation.set(...k),E.add(oe),oe}function u(E,V,te,le){let k=new Eo(o,te,V.length),j=new Ht;j.scale.set(...le),V.forEach((oe,pe)=>{j.position.set(...oe),j.updateMatrix(),k.setMatrixAt(pe,j.matrix)}),E.add(k)}function m(E,V=4.45,te=2.9){h(E,[V,.14,te],[0,-1.36,0],i),h(E,[V-.18,.045,te-.18],[0,-1.263,0],s);let le=[];for(let k of[-1,1])for(let j=0;j<6;j++){let oe=k*(V/2-.16-j*.17);le.push([oe,-1.226,-te/2+.25],[oe,-1.226,te/2-.25])}u(E,le,s,[.085,.025,.24])}function _(E){m(E,4.8,3.15);let V=new Wt(new xa(1.13,1),i);V.rotation.set(.18,.34,-.15),V.add(new Wi(new Fr(V.geometry,14),a)),E.add(V);let te=new Wi(new Oo(new xa(.78,0)),c.get(Qn));te.rotation.set(-.4,.1,.3);let le=new gi;le.add(te),f(le,1.67,l.get(Qn),[0,0,0],[.84,.4,0],5.35),f(le,1.86,l.get(Ui),[0,0,0],[-.45,.95,-.6],4.3),f(le,2.15,l.get(Qn),[0,0,0],[1.18,-.34,1.8],2.85),f(E,2.26,s,[0,-.9,0],[Math.PI/2,0,0]),E.add(le);let k=[];for(let j=0;j<8;j++){let oe=j*U0/8;k.push([Math.cos(oe)*1.95,-1.16,Math.sin(oe)*1.24])}return u(E,k,l.get(Qn),[.07,.07,.07]),j=>{le.rotation.y=Math.sin(j*.28)*.38,le.rotation.z=j*.09}}function p(E,V,te,le=1.75){let k=document.createElement("canvas");k.width=448,k.height=104;let j=k.getContext("2d");j.fillStyle="#eaf0ff",j.beginPath(),j.roundRect(1,3,446,98,18),j.fill(),j.fillStyle="#172765",j.textAlign="center",j.textBaseline="middle",j.font="700 55px Arial, sans-serif",j.fillText(V,224,54,403);let oe=new Ro(k);oe.colorSpace=pn;let pe=new ha({map:oe,depthWrite:!1,toneMapped:!1,fog:!1}),ce=new bo(pe);ce.position.set(...te),ce.scale.set(le,le*k.height/k.width,1),E.add(ce)}let g=[[-1.18,.88,0],[1.18,.88,0],[1.18,-.73,0],[-1.18,-.73,0]],v=-.055,b=new va(.075),y=new Lo(.08,.16,3),w=l.get(Ui),A=c.get(Qn);function x(E,V,te=A){d(E,V.map(([le,k])=>[le,k,.4]),te)}function S(E,V){if(V==="document"||V==="draft"||V==="plan"){x(E,[[-.37,-.25],[-.37,.49],[.16,.49],[.38,.27],[.38,-.25],[-.37,-.25]]),x(E,[[.16,.49],[.16,.27],[.38,.27]]);for(let te of[.12,-.02,-.16])x(E,[[-.23,te],[.23,te]])}else if(V==="route"||V==="attention"||V==="socket"){let te=[[-.48,.12],[0,.12],[.47,.34],[.47,-.12]];x(E,[te[0],te[1],te[2]]),x(E,[te[1],te[3]]),u(E,te.map(([le,k])=>[le,k,.41]),w,[.1,.1,.09])}else if(V==="extract"||V==="token"||V==="decoder"){let te=[];for(let le=0;le<3;le++)for(let k=0;k<5;k++)(le+k)%3!==2&&te.push([-.48+k*.24,-.14+le*.24,.42]);u(E,te,w,[.17,.16,.085])}else if(V==="evaluate"||V==="validate"||V==="dedupe")x(E,[[-.48,-.2],[-.48,.42],[.48,.42],[.48,-.2],[-.48,-.2]]),x(E,[[-.25,.1],[-.08,-.06],[.28,.28]],c.get(Ui)),u(E,[[-.25,.1,.4],[-.08,-.06,.4],[.28,.28,.4]],w,[.07,.07,.07]);else if(V==="improve"||V==="delivery")f(E,.34,w,[0,.12,.42],[0,0,.65],5.05),x(E,[[.14,.45],[.33,.4],[.33,.23]]),u(E,[[0,.12,.42]],w,[.115,.115,.115]);else if(V==="database")for(let te of[-.06,.12,.3]){let le=new Wt(new ma(.37,.37,.105,20),s);le.position.set(0,te,.38),le.add(new Wi(new Fr(le.geometry),A)),E.add(le)}else if(V==="client"||V==="fullstack")x(E,[[-.52,-.16],[-.52,.42],[.52,.42],[.52,-.16],[-.52,-.16]]),x(E,[[-.5,.26],[.5,.26]]),x(E,[[-.26,.1],[-.37,.01],[-.26,-.08]]),x(E,[[.26,.1],[.37,.01],[.26,-.08]]);else{let te=new Wt(new va(.33),w);te.position.set(0,.13,.34),te.rotation.set(.24,.41,.13),E.add(te)}}function P(E,V,te={}){let le=V.map(([pe,ce],Re)=>{let Ye=new gi,[we,Fe,Ce]=g[Re];Ye.position.set(we,Fe,Ce);let Pe=new cs({color:N0,roughness:.53,metalness:.35,emissive:Ui,emissiveIntensity:.08});return h(Ye,[1.88,1.22,.24],[0,0,0],i),h(Ye,[1.68,.99,.13],[0,.03,.17],Pe),S(Ye,ce),p(Ye,pe,[0,-.43,.48]),E.add(Ye),{tile:Ye,face:Pe}}),k=[];function j(pe,ce,Re=Ui,Ye=!0){let we=new F(...pe).setZ(v),Fe=new F(...ce).setZ(v);d(E,[we.toArray(),Fe.toArray()],c.get(Re));let Ce=new Wt(Ye?y:b,l.get(Re));Ce.position.lerpVectors(we,Fe,.5),Ye&&Ce.quaternion.setFromUnitVectors(new F(0,1,0),Fe.clone().sub(we).normalize()),E.add(Ce),k.push([we,Fe])}if(te.hub){let pe=new Wt(new Do(.34),s);pe.add(new Wi(new Fr(pe.geometry),A)),E.add(pe);for(let ce of g)j([0,.075,0],ce,Qn,!1)}else{for(let pe=0;pe<le.length-1;pe++)j(g[pe],g[pe+1]);te.feedback&&j(g[3],g[0],Qn)}te.monitor&&(d(E,[[-1.18,-1.35,v],[-1.18,-1.73,v],[0,-1.73,v]],c.get(Qn)),p(E,"Monitor",[.53,-1.73,.11],1.38)),te.feedback&&p(E,"Next pass",[0,.075,.07],1.4);let oe=new Wt(b,l.get(Qn));return oe.scale.setScalar(1.4),E.add(oe),pe=>{let ce=Ea.clamp(pe/6,0,1),Re=ce*k.length,Ye=Math.min(Math.floor(Re),k.length-1),[we,Fe]=k[Ye];oe.position.lerpVectors(we,Fe,Re-Ye),oe.position.z=.55;let Ce=Math.min(le.length-1,Math.floor(ce*le.length));for(let[Pe,st]of le.entries())st.face.emissiveIntensity=Pe===Ce?.48:Pe<Ce?.17:.035,st.tile.position.z=Pe===Ce?.12:0}}function C(E){return P(E,[["Documents","document"],["Route","route"],["Extract","extract"],["Validate","validate"]],{monitor:!0})}function N(E){return P(E,[["Plan","plan"],["Generate","draft"],["Evaluate","evaluate"],["Improve","improve"]],{feedback:!0})}function L(E){return P(E,[["BPE tokens","token"],["Causal attention","attention"],["Decoder","decoder"],["Evaluate","evaluate"]])}function z(E){return P(E,[["Client","client"],["WebSocket","socket"],["Dedupe","dedupe"],["SQLite","database"]])}function I(E){return P(E,[["AI engineering","ai"],["Backend & data","database"],["Full stack","fullstack"],["Delivery","delivery"]],{hub:!0})}let G=[_,C,N,L,z,I],X=nr.map((E,V)=>{let te=new gi;te.name=E.name,te.position.set(...E.anchor);let le=G[V](te);return e.add(te),{group:te,animate:le}}),O=new Vo(68,68,5469386,3229339);O.position.set(25,-1.51,0),r.add(O);for(let E=0;E<5;E++){let V=2.1+E*.26,te=[[-7,-1.48,V]];for(let le=0;le<nr.length;le++){let k=nr[le].anchor[0],j=(le+E)%2*.66;te.push([k-3,-1.48,V],[k-2,-1.48,V+j],[k+2,-1.48,V+j],[k+3,-1.48,V])}te.push([57,-1.48,V]),d(r,te)}let Q=new Float32Array(270);for(let E=0;E<90;E++)Q.set([E*73%211/211*64-7,E*43%89/89*5-1,E*19%113/113*13-8],E*3);let q=new Kt().setAttribute("position",new Xn(Q,3));return r.add(new Ao(q,new pa({color:8429279,size:.028,sizeAttenuation:!0}))),{scene:r,landmarks:X,key:t,rim:n}}var C1,N0,Qn,Ui,U0,nr,F0=Rr(()=>{ad();C1=1121110,N0=2703004,Qn=15856634,Ui=8182015,U0=Math.PI*2,nr=[{name:"top",anchor:[0,0,0],view:[6.5,4,9.2],lens:35,color:Qn},{name:"production",anchor:[10,.35,-2],view:[1.45,1.6,10.2],lens:35,color:Ui},{name:"agentic",anchor:[20,.1,.8],view:[.4,1.2,10.4],lens:36,color:Qn},{name:"generative",anchor:[30,.2,-2.4],view:[-1.45,1.5,10.4],lens:37,color:Ui},{name:"backend",anchor:[40,.05,1.4],view:[1.8,1.9,10.2],lens:34,color:Qn},{name:"toolkit",anchor:[50,.1,-.3],view:[-.8,1.45,10.5],lens:36,color:Ui}]});var D1=V0(()=>{ad();G_();D0();F0();ep.registerPlugin(Ze);var Oi=document.querySelector("#world"),Fl=Array.from(document.querySelectorAll("[data-chapter]")),Os=document.documentElement,R1=Array.from(document.querySelectorAll("[data-nav]")),$a=document.querySelector("#scroll-progress"),Nl=document.querySelector("#motion-toggle"),Ul=window.matchMedia("(prefers-reduced-motion: reduce)"),{clamp:Ol,damp:P1,lerp:Tp}=Ea,B0=()=>Ul.matches||Cp,Cp=!1,Us=0,z0=0,wp=-1,Ns=[],Du=1,Rp=()=>{},k0=new AbortController,ns=(r,e,t,n={})=>r?.addEventListener(e,t,{...n,signal:k0.signal});function I1(){let r=window.innerHeight;Du=Math.max(1,document.documentElement.scrollHeight-r),Ns=Fl.map((e,t)=>{let n=e.getBoundingClientRect().top+window.scrollY;return t===0?0:Ol(n-Math.min(r*.29,235),0,Du)})}function G0(){let r=Ol(window.scrollY,0,Du),e=0;for(;e<Ns.length-1&&r>=Ns[e+1];)e++;let t=Math.min(e+1,Ns.length-1),n=Ns[t]-Ns[e],i=n>0?(r-Ns[e])/n:0;z0=e+i,Us=e+Ea.smoothstep(i,.43,1);let s=Math.min(Math.round(Us),Fl.length-1),a=r/Du;if($a?.style.setProperty("--progress",String(a)),$a instanceof HTMLProgressElement?($a.max=1,$a.value=a):$a?.getAttribute("role")==="progressbar"&&$a.setAttribute("aria-valuenow",String(Math.round(a*100))),s!==wp){wp=s;let o=Fl[wp],l=o.dataset.chapter||o.id;Os.dataset.activeChapter=l;for(let c of R1)c.dataset.nav===l||c.getAttribute("href")===`#${o.id}`?c.setAttribute("aria-current","location"):c.removeAttribute("aria-current")}Rp()}function Ep(){I1(),G0()}function Ap(){let r=B0(),e=Ul.matches?"Motion disabled":r?"Resume motion":"Pause motion";Os.classList.toggle("motion-paused",r),document.body.classList.toggle("motion-paused",r),Nl?.setAttribute("aria-label",Ul.matches?"Motion disabled by system settings":e),Nl&&(Nl.disabled=Ul.matches);let t=Nl?.querySelector("[data-motion-label]");t&&(t.textContent=e),Rp()}function L1(){if(!Oi||Fl.length!==nr.length)return()=>{};let r=Oi.getContext("webgl2",{alpha:!0,antialias:!0,powerPreference:"low-power"});if(!r)return()=>{};let e;try{e=new Hh({canvas:Oi,context:r,alpha:!0})}catch{return Os.dataset.worldState="fallback",()=>{}}e.outputColorSpace=pn,e.toneMapping=Wo,e.toneMappingExposure=1.15,e.setClearColor(0,0);let{scene:t,landmarks:n,key:i,rim:s}=O0(),a=new Dn(38,1,.1,85),o=nr.map(z=>new F(...z.anchor)),l=nr.map((z,I)=>o[I].clone().add(new F(...z.view))),c=new _a(l,!1,"catmullrom",.43),h=new _a(o,!1,"catmullrom",.38),d=new F,f=new Ve,u=new Ve,m=nr.map(z=>new Ve(z.color)),_=Us,p=0,g=0,v=!1,b=!1,y=!0,w=1.6,A=0,x=1.6;function S(){let z=Oi.clientWidth||Oi.parentElement.clientWidth||innerWidth,I=Oi.clientHeight||Oi.parentElement.clientHeight||innerHeight;b=innerWidth<780;let G=Math.min(window.devicePixelRatio||1,b?1.25:1.6,x);w=G,e.setPixelRatio(G),e.setSize(z,I,!1),a.aspect=z/Math.max(I,1),a.updateProjectionMatrix(),C()}function P(z){if(g=0,v||document.hidden||!y)return;let I=p?z-p:16.67,G=Math.min(I/1e3,1/30);p=z;let X=B0();_=X?Math.round(Us):P1(_,Us,7.2,G);let O=n.length-1,Q=Math.min(Math.floor(_),O),q=Math.min(Q+1,O),E=_-Q,V=Ol(_/O,0,1);h.getPoint(V,d),c.getPoint(V,a.position),b&&(a.position.x=Tp(a.position.x,d.x,.3),a.position.y+=.35),a.fov=Tp(nr[Q].lens,nr[q].lens,E)+(b?2:0);let te=Math.tan(a.fov*Math.PI/360),le=a.position.distanceTo(d),k=b&&a.aspect>1.35,j=k?Tp(.84,.72,Ol(_,0,1)):1,oe=Math.max(5.55/(2*te*a.aspect),le*j);a.position.sub(d).multiplyScalar(oe/le).add(d),d.y+=k?-.24:.16,a.lookAt(d),a.updateProjectionMatrix(),f.copy(m[Q]).lerp(u.copy(m[q]),E),s.color.copy(f),s.position.set(d.x-6,4,-5),i.position.set(d.x+1,8,9),i.target.position.copy(d),s.target.position.copy(d),i.target.updateMatrixWorld(),s.target.updateMatrixWorld();for(let[pe,ce]of n.entries())ce.group.visible=Math.abs(pe-_)<1.35,ce.group.visible&&ce.animate(X?0:Ol(z0-pe,0,1)*6);e.render(t,a),Os.dataset.worldState!=="ready"&&(Os.dataset.worldState="ready"),!X&&w>1&&I>25?A++:A=Math.max(0,A-2),A>75&&x>1&&(x=1,A=0,S()),!X&&Math.abs(_-Us)>.001?C():p=0}function C(){!g&&!v&&!document.hidden&&y&&(g=requestAnimationFrame(P))}ns(document,"visibilitychange",()=>{p=0,C()}),ns(Oi,"webglcontextlost",z=>{z.preventDefault(),v=!0,Os.dataset.worldState="lost",cancelAnimationFrame(g),g=0}),ns(Oi,"webglcontextrestored",()=>{v=!1,_=Us,p=0,S()});let N=new ResizeObserver(S);N.observe(Oi);let L=new IntersectionObserver(([z])=>{y=z.isIntersecting,p=0,C()});return L.observe(Oi),Rp=C,S(),()=>{cancelAnimationFrame(g),N.disconnect(),L.disconnect();let z=new Set;t.traverse(I=>{I.geometry&&z.add(I.geometry),I.material&&z.add(I.material),I.material?.map&&z.add(I.material.map),I.isInstancedMesh&&z.add(I)});for(let I of z)I.dispose();e.dispose()}}if(Fl.length){Os.dataset.worldState="fallback",Ep(),Ap();let r=Ze.create({id:"portfolio-world",start:0,end:"max",onUpdate:G0,onRefresh:Ep}),e=L1();ns(Nl,"click",()=>{Cp=!Cp,Ap()}),ns(Ul,"change",Ap),ns(window,"hashchange",Ep),ns(window,"pageshow",()=>Ze.refresh()),ns(window,"pagehide",t=>{t.persisted||(k0.abort(),r.kill(),e())}),document.fonts?.ready.then(()=>Ze.refresh())}});D1();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
