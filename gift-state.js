'use strict';
const GiftState=(()=>{
  const limit=3;
  function normalize(value,ids){
    if(!value||!Array.isArray(value.openings))return {openings:[]};
    const unique=new Set();
    return {openings:value.openings.filter(entry=>entry&&ids.includes(entry.id)&&!unique.has(entry.id)&&unique.add(entry.id)).slice(0,limit).map(entry=>({id:entry.id,status:entry.status==='reserved'?'reserved':'opened',claimed:entry.claimed===true}))};
  }
  function reserve(state,id){
    if(state.openings.length>=limit||state.openings.some(entry=>entry.id===id))return null;
    if(state.openings.some(entry=>entry.status==='reserved'))return null;
    return {openings:[...state.openings,{id,status:'reserved',claimed:false}]};
  }
  function complete(state,id){return {openings:state.openings.map(entry=>entry.id===id?{...entry,status:'opened'}:entry)};}
  function claim(state,id){return {openings:state.openings.map(entry=>entry.id===id&&entry.status==='opened'?{...entry,claimed:true}:entry)};}
  function remaining(state){return Math.max(0,limit-state.openings.length);}
  return {limit,normalize,reserve,complete,claim,remaining};
})();