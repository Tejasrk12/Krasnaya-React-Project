import React from 'react'
import SliderImg1 from '../assets/images/slider/logout-banner.jpg'
import SliderImg2 from '../assets/images/slider/vicky-banner.jpg'

export default function Slider() {
  const SliderData = [
        {
        SliderImg: SliderImg1,
        SliderTitle: <>Logout: <br/>A Krasnaya Original That<br/>  Questions the Digital Age</>,
        SliderText: "Produced by Krasnaya Corporation, Logout is a gripping exploration of identity, disconnection, and the darker side of the digital world. With a fresh narrative voice and compelling visual storytelling, the film marks our bold step into thought-provoking cinema. As storytellers, we believe in crafting narratives that reflect the pulse of modern society."
        },
        {
        SliderImg: SliderImg2,
        SliderTitle: <>Vicky Donor Returns to <br/>the Big Screen</>,
        SliderText: "Krasnaya Corporation proudly distributed the grand rerelease of Vicky Donor, bringing the beloved classic back to cinemas nationwide. Through strategic partnerships and a revitalized marketing approach, we connected a new generation of audiences with this iconic story. Rekindling nostalgia and celebrating cinematic excellence, we continue our commitment to championing meaningful films."
        }
  ]
  return (
 <ul>
        {SliderData.map((d, i)=>(
        <li key={i} data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb={d.SliderImg} data-rotate="0" data-saveperformance="off" data-title="Slide">
            <img src={d.SliderImg} alt="" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="110" data-rotatestart="0" data-rotateend="0" data-blurstart="0" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" />
            <div className="tp-caption slider-title tp-resizeme mon-72-700"
                data-x="['center','center','center','center']" data-hoffset="['0','0','-1','-1']"
                data-y="['middle','middle','middle','middle']" data-voffset="['-30','42','32','-200']"
                data-fontsize="['48','32','26','24']" data-lineheight="['58','40','36','36']"
                data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">{d.SliderTitle}
            </div>
           <div className="tp-caption tp-resizeme lat-16-400"
                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['150','160','144','50']"
                data-fontsize="['20','20','20','20']" data-lineheight="['26','28','28','28']"
                data-width="['737','737','737','400']" data-height="['150','85','85','none']"
                data-whitespace="normal" data-type="text" data-responsive_offset="on"
                data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]">{d.SliderText}              
            </div>
        </li> 
        ))}
    </ul>
  )
}


