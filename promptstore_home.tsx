import React, { useState, useEffect, useCallback } from 'react';
import { 
  Copy, 
  Check, 
  X, 
  Image as ImageIcon, 
  TrendingUp, 
  ChevronRight, 
  ChevronLeft,
  Heart
} from 'lucide-react';

const PROMPT_DATA = [
  {
    "trend": "879",
    "caption": "You were created to do magical things 🪄🖤✨",
    "prompt": "Create an ultra-realistic full-body fashion photograph of an adult woman, closely matching the reference image. Appearance: Shoulder-length dark-brown hair with a natural center part and soft loose waves. Minimal natural makeup, softly defined eyes, subtle pink lips, and a calm neutral expression looking directly at the camera. Outfit: Sleek fitted black one-piece swimsuit. It has a wide diagonal cutout running right waist to left shoulder, plus a curved cutout at the left waist. High-cut legs and smooth matte-black fabric. Pose: 1. Standing upright and facing the camera. Her torso remains straight while her hips are slightly angled. Both arms hang naturally beside her body with relaxed hands. One leg is placed slightly forward and crosses subtly in front of the other, creating the same elegant walking-like stance as the reference. Bare feet. 2. Seated on the studio floor with one knee raised and the other leg extended diagonally, one hand resting beside her and the other lightly on her raised knee, leaning back slightly with a relaxed, confident smile. 3. Standing in a three-quarter profile with one hand resting on her hip and the other arm relaxed, weight shifted onto the back leg, chin slightly raised, giving a subtle playful side glance. 4. Sitting on a low invisible stool with legs crossed at the ankles, torso upright, hands resting naturally on her thighs, shoulders relaxed, with a soft thoughtful expression looking slightly past the camera. 5. Standing with her back lightly against the wall, one knee bent with the foot touching the wall behind her, arms loosely folded, head tilted slightly to one side, wearing a calm, subtly amused expression. Composition: Vertical full-body portrait with the woman centered. Keep generous pale-gray negative space around her, with her head near the upper quarter and both feet visible near the bottom. Camera is positioned straight-on at approximately waist/chest height. Setting: Minimalist light-gray/white studio with a seamless wall and floor. No furniture or distracting objects. Lighting: Bright soft daylight entering from the right, creating gentle shadows and long diagonal window-light shadows across the floor. Style: Ultra-photorealistic minimalist fashion photography, realistic skin and hair, accurate swimsuit construction and cutouts, natural anatomy, soft neutral tones, clean high-key aesthetic. 9:16ar",
    "images": [
      "https://pbs.twimg.com/media/HS0ulXNbQAARaRj.jpg",
      "https://pbs.twimg.com/media/HS0ul-nbkAAX0ef.jpg"
    ]
  },
  {
    "trend": "878",
    "caption": "In his oversized shirt 🤍🤍🤍",
    "prompt": "Create an ultra-realistic cinematic lifestyle photograph of an adult woman(match face) standing barefoot beside a floor-to-ceiling glass window in a luxurious high-rise apartment, closely matching the reference image’s composition, pose, framing, lighting, and atmosphere. Appearance: Wet-looking shoulder-length dark-brown hair with loose strands framing her face, natural makeup, warm glowing skin, and a soft thoughtful expression looking toward the city outside. Outfit: Oversized semi-sheer white button-up shirt worn loosely over black shorts, with the sleeves casually rolled up. Minimal delicate necklace and rings. Pose: 1. Standing in the corner beside the window frame, body angled slightly toward the city. One hand lightly touches the dark window frame beside her head while the other gently holds the shirt closed at her waist. Legs crossed naturally at the ankles, barefoot, matching the relaxed pose in the reference. 2. Sitting sideways on the beige sofa, one leg tucked slightly under the other, one arm resting along the backrest, gently gazing toward the window with a soft contemplative expression. 3. Standing with her back lightly against the window frame, one knee bent with the foot resting against the wall, arms loosely folded, looking toward the camera with a subtle confident half-smile. 4. Sitting on the edge of the coffee table, legs crossed naturally at the ankles, elbows relaxed on her knees, hands loosely clasped, looking downward with a calm introspective expression. 5. Standing near the window with her body turned toward the city, both hands resting lightly on the window frame at waist level, head slightly tilted back, eyes closed with a peaceful serene expression. Setting: Modern luxury apartment at sunset, with a floor-to-ceiling window showing a dense city skyline and glowing lights outside. A cozy living room with a beige sofa, floor lamp, coffee table, flowers, and warm interior details is visible on the left. Lighting: Warm sunset light coming through the window, illuminating her face and shirt while the apartment remains softly dim and cozy. Pink-orange sky and blurred city lights outside. Composition: Vertical full-body frame, woman positioned slightly right of center beside the window frame, entire body and bare feet visible. Keep the city skyline occupying the right background and the living room visible on the left. Style: Ultra-photorealistic cinematic lifestyle photography, realistic skin, wet hair strands, natural fabric folds, warm sunset tones, subtle depth of field, intimate luxury-apartment atmosphere. 9:16ar",
    "images": [
      "https://pbs.twimg.com/media/HSy3a45asAAtb5R.jpg",
      "https://pbs.twimg.com/media/HSy3bS_aUAE_7xx.jpg"
    ]
  },
  {
    "trend": "877",
    "caption": "Simplicity is the keynote of all true elegance 🖤",
    "prompt": "Create an ultra-realistic high-fashion editorial photograph of an adult woman(match face), silhouette, framing, lighting, and minimalist studio aesthetic. Appearance: Long dark hair styled loosely and swept across part of her face, with natural flyaway strands. Dramatic smoky eye makeup, defined brows, subtle nude lips, and an intense confident expression looking directly toward the camera. Outfit: Elegant fitted black floor-length gown with very thin spaghetti single strap crossing delicately near the collarbone, an extremely deep V neckline, fitted waist and hips, and a high thigh slit along one side. Pose: 1. Standing tall with both arms raised above her head, elbows bent, hands resting in her hair. Her torso faces the camera while her hips angle slightly to one side, creating the same elongated S-shaped silhouette. One leg is visible through the high slit and extends slightly forward. 2. Seated sideways on a minimalist stool, one leg extended slightly forward and the other bent, one arm resting along the back of the stool while the other rests lightly on her thigh; chin slightly lowered, giving a calm, mysterious gaze toward the camera. 3. Standing in a three-quarter profile with one shoulder closer to the camera, one hand resting on her hip and the other gently touching her hair; subtle closed-mouth smile with a confident, playful expression. 4. Seated elegantly on the studio floor with one knee raised and the other leg extended diagonally, torso upright and supported by one arm behind her; head tilted slightly to the side with a soft, thoughtful expression and eyes looking directly at the camera. 5. Standing tall with one foot slightly forward, both arms relaxed naturally at her sides, shoulders angled subtly away from the camera; chin lifted slightly with a composed, powerful expression and an intense direct gaze. Composition: Vertical full-body fashion portrait, subject centered against a plain dark-gray studio background. Camera positioned slightly below eye level, with the entire figure extending almost from the top to the bottom of the frame. Lighting: Dramatic single-source side lighting, creating strong highlights across the face, chest, arms, and exposed leg while leaving parts of the black gown and background in deep shadow. Style: luxury fashion photography, realistic skin texture, detailed hair strands, elegant shadows, sophisticated editorial atmosphere. 9:16ar",
    "images": [
      "https://pbs.twimg.com/media/HSw3oKga0AAj4Ut.jpg",
      "https://pbs.twimg.com/media/HSw3olIacAAPppL.jpg"
    ]
  },
  {
    "trend": "876",
    "caption": "Hope you know, all my love is only for you, only You...💕",
    "prompt": "Prompt 1: Create an ultra-realistic cinematic romantic photograph of a couple(match faces from the reference image) on a motorcycle at the beach during sunset... [full long prompt for motorcycle beach kiss + indoor kiss variant]",
    "images": [
      "https://pbs.twimg.com/media/HSwADAvaUAAE82T.jpg",
      "https://pbs.twimg.com/media/HSwADfabIAIlbIX.jpg"
    ]
  },
  {
    "trend": "875",
    "caption": "At my cozy place 🙈❤️",
    "prompt": "Create an ultra-realistic cinematic lifestyle portrait of an adult woman(match face) relaxing in a cozy boucle armchair... [full prompt with 5 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSvMCLFaQAA_EQn.jpg",
      "https://pbs.twimg.com/media/HSvMCjAbYAAqRih.jpg"
    ]
  },
  {
    "trend": "874",
    "caption": "Fashion is the art we live in 💅🏻💄👄",
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman(match face), closely matching the reference image’s low-angle perspective... [sparkling black mini dress + gloves, 5 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSt6Jvna0AAUIYd.jpg",
      "https://pbs.twimg.com/media/HSt6MFFaMAEViiP.jpg"
    ]
  },
  {
    "trend": "873",
    "caption": "Being sexy is about comfortable in yourself 🖤",
    "prompt": "Create an ultra-realistic black-and-white fashion editorial portrait of an adult woman(match face)... [black cutout bodysuit + tattoos, 4 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSr1U-gaQAATf4W.jpg",
      "https://pbs.twimg.com/media/HSr1VbMakAEQO65.jpg",
      "https://pbs.twimg.com/media/HSr1V2wbUAALon6.jpg"
    ]
  },
  {
    "trend": "872",
    "caption": "Have you ever tried a metallic one piece 🩵",
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman(match face) in a futuristic pastel-blue studio outfit... [metallic light-blue outfit, 5 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSquxN1awAAeYHr.jpg",
      "https://pbs.twimg.com/media/HSquxqDawAAwtfn.jpg"
    ]
  },
  {
    "trend": "871",
    "caption": "Inside White Woven Sphere, completely vulnerable 💫",
    "prompt": "Prompt 1 (woman) + Prompt 2 (man): Create an ultra-realistic conceptual fine-art portrait of an adult [woman/man] curled inside a large spherical structure made entirely from delicate white threads...",
    "images": [
      "https://pbs.twimg.com/media/HSpxvH2acAARf6i.jpg",
      "https://pbs.twimg.com/media/HSpxvrzbkAARyC6.jpg"
    ]
  },
  {
    "trend": "870",
    "caption": "Tape outfits to try out ✨",
    "prompt": "Prompt 1 + Prompt 2: Create an ultra-realistic full-body fashion editorial photograph... [yellow STOP / CAUTION tape outfits]",
    "images": [
      "https://pbs.twimg.com/media/HSobymIaoAAKUZe.jpg",
      "https://pbs.twimg.com/media/HSobzC5aUAA-DEH.jpg"
    ]
  },
  {
    "trend": "869",
    "caption": "Mini Dress & Strappy Heels 🖤",
    "prompt": "Create an ultra-realistic cinematic fashion photograph of an adult woman(match face) sitting on a modern glass-top table... [black halter mini dress, 5 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSmG3n5bAAAIPaF.jpg",
      "https://pbs.twimg.com/media/HSmG4Jea4AA7WKV.jpg"
    ]
  },
  {
    "trend": "868",
    "caption": "Summer beaches and swimsuits 💙👙",
    "prompt": "Create an ultra-realistic cinematic fashion photograph of an adult woman(match face) posing against a weathered white wooden wall... [navy-blue one-piece swimsuit, 3 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSlNukbaQAAknB7.jpg",
      "https://pbs.twimg.com/media/HSlNvNEbgAA2HeT.jpg",
      "https://pbs.twimg.com/media/HSlNvpHa8AAox13.jpg"
    ]
  },
  {
    "trend": "867",
    "caption": "Oh..I love cozy surroundings 🩵✨",
    "prompt": "Create an ultra-realistic cozy lifestyle portrait of an adult woman(match face) lying diagonally across a bed... [pastel sweater + plush toys + fairy lights]",
    "images": [
      "https://pbs.twimg.com/media/HSkchNXa0AA04Ax.jpg",
      "https://pbs.twimg.com/media/HSkchtZaMAAC5yO.jpg"
    ]
  },
  {
    "trend": "866",
    "caption": "Cherry Cherry lady 🍒👠",
    "prompt": "Create an ultra-realistic cinematic fashion photograph of an adult woman(match face) sitting on the floor... [bright-red mini dress + white tulle skirt + cherries]",
    "images": [
      "https://pbs.twimg.com/media/HSi-An6bAAAnNDW.jpg",
      "https://pbs.twimg.com/media/HSi-BB0a4AAbuZP.jpg"
    ]
  },
  {
    "trend": "865",
    "caption": "Red is my favourite colour ❤️. What is yours? 🙈",
    "prompt": "Create an ultra-realistic cinematic fashion portrait of an adult woman(match face) sitting on a weathered concrete ledge beside the sea... [bright-red cutout dress]",
    "images": [
      "https://pbs.twimg.com/media/HShKbXQbwAAwxZt.jpg",
      "https://pbs.twimg.com/media/HShKb32bYAAuRSI.jpg",
      "https://pbs.twimg.com/media/HShKcXEboAApa_g.jpg",
      "https://pbs.twimg.com/media/HShKc3XaQAEAUgH.jpg"
    ]
  },
  {
    "trend": "864",
    "caption": "It's Friday and I am ready for the party. You are also coming right? 🫦✨",
    "prompt": "Create an ultra-realistic cinematic fashion portrait of an adult woman(match face)... [ivory satin camisole + black pleated skirt + handbag, 5 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSgLVfWbYAAiweg.jpg",
      "https://pbs.twimg.com/media/HSgLXfxa0AAs6Bi.jpg"
    ]
  },
  {
    "trend": "863",
    "caption": "Convert your image into Momo Ayase from Dan Da Dan Cosplay ✨",
    "prompt": "Create an ultra-realistic full-body fashion cosplay photograph of an adult woman(match face) dressed as Momo Ayase from Dandadan...",
    "images": [
      "https://pbs.twimg.com/media/HSfeZ3Sb0AA4M2u.jpg"
    ]
  },
  {
    "trend": "862",
    "caption": "Finding my light who can feed me some apples 🍎",
    "prompt": "Create an ultra-realistic cinematic fashion editorial portrait of an adult woman(match face) with a dark angel aesthetic... [black feathered wings]",
    "images": [
      "https://pbs.twimg.com/media/HSeShOGbEAAgxq0.jpg",
      "https://pbs.twimg.com/media/HSeShpobUAAnWGQ.jpg"
    ]
  },
  {
    "trend": "861",
    "caption": "The more hearts, the better ❤️",
    "prompt": "Create an ultra-realistic full-body fashion character reference image of the same adult woman(match face) shown twice side-by-side... [heart-patched overalls front + back view]",
    "images": [
      "https://pbs.twimg.com/media/HScHzBAakAA5mYA.jpg"
    ]
  },
  {
    "trend": "860",
    "caption": "I am ready and you? 💖💅🏻",
    "prompt": "Create an ultra-realistic mirror selfie of an adult woman(match face) in a modern minimalist bedroom... [pink-and-gold strapless set]",
    "images": [
      "https://pbs.twimg.com/media/HSa67mraEAANlOX.jpg"
    ]
  },
  {
    "trend": "859",
    "caption": "If you know how to pull the right strings, you know how to handle it 😏🎸🤘🏻🎶",
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman... posing with a glossy black electric bass guitar... [5 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSZ8SCJagAApeb1.jpg",
      "https://pbs.twimg.com/media/HSZ8SZ4bUAAoeMq.jpg"
    ]
  },
  {
    "trend": "858",
    "caption": "Do you like tattooed version of me? 🖤🙈",
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman(match face) in a sophisticated dark-red, fairytale-inspired studio setting... [crimson satin dress + tattoos + apple]",
    "images": [
      "https://pbs.twimg.com/media/HSY_OWlbgAAm_0_.jpg",
      "https://pbs.twimg.com/media/HSY_OyJaIAAcZGA.jpg"
    ]
  },
  {
    "trend": "857",
    "caption": "Your beauty matters more than your prettiness 🤍",
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman(match face) standing against a clean minimalist white studio wall... [white cropped top + chiffon skirt, 4 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSW9VmaagAAMoD4.jpg",
      "https://pbs.twimg.com/media/HSW9WBPbgAA8bi6.jpg",
      "https://pbs.twimg.com/media/HSW9WgEakAA8Tyz.jpg",
      "https://pbs.twimg.com/media/HSW9W-vbMAA3ldq.jpg"
    ]
  },
  {
    "trend": "856",
    "caption": "Denim Overall & Rustic Kitchen Vibe 💙",
    "prompt": "Create an ultra-realistic cinematic fashion photograph of an adult woman(match face) standing indoors in a warm rustic wooden café or farmhouse kitchen... [blue denim short overall]",
    "images": [
      "https://pbs.twimg.com/media/HSV6_2sb0AAWGAe.jpg",
      "https://pbs.twimg.com/media/HSV7AZ3boAEXWqM.jpg"
    ]
  },
  {
    "trend": "855",
    "caption": "Life is too short, Love and wear Pretty Clothes 💛💅🏻",
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman(match face) standing confidently in a minimalist black studio... [beige satin crop + tailored trousers, 5 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSU_LycaMAAvV2a.jpg",
      "https://pbs.twimg.com/media/HSU_MNzakAACDrm.jpg"
    ]
  },
  {
    "trend": "854",
    "caption": null,
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman(match face) seated gracefully in an oversized white wicker peacock chair against a vibrant turquoise-blue studio backdrop... [tropical floral blouse + heart lollipop]",
    "images": [
      "https://pbs.twimg.com/media/HSUJKKObgAELbEh.jpg",
      "https://pbs.twimg.com/media/HSUJKqYaYAA1g0j.jpg"
    ]
  },
  {
    "trend": "853",
    "caption": "What would you do first if I was a barbie doll 🩷👠🎀?",
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman(match face) in a whimsical pink doll-inspired studio setting... [pastel-pink corset + tulle tutu]",
    "images": [
      "https://pbs.twimg.com/media/HSRgNGibUAAPvw6.jpg"
    ]
  },
  {
    "trend": "852",
    "caption": "Would you take my heart ❤️?",
    "prompt": "Create an ultra-realistic cinematic fashion editorial photograph of an adult woman... holding an oversized bright-red heart-shaped prop...",
    "images": [
      "https://pbs.twimg.com/media/HSQqPf7a0AAqhhm.jpg"
    ]
  },
  {
    "trend": "851",
    "caption": "Feeling dreary 👁️👁️",
    "prompt": "Create an ultra-realistic cinematic black-and-white fine-art fashion portrait of an adult woman(match face)... [sheer black chiffon gown, 4 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSP-rjnaYAA0yIf.jpg",
      "https://pbs.twimg.com/media/HSP-r6gaoAA8SM7.jpg",
      "https://pbs.twimg.com/media/HSP-sQuaoAA8jD0.jpg",
      "https://pbs.twimg.com/media/HSP-slaa0AAXdMg.jpg"
    ]
  },
  {
    "trend": "850",
    "caption": "Choose one (Your choice won't be judged 😎)",
    "prompt": "Prompt 1 (woman) + Prompt 2 (man): Create an ultra-realistic cinematic lifestyle portrait... in a warm, elegant modern bathroom [white towel]",
    "images": [
      "https://pbs.twimg.com/media/HSOxOeTaYAAHevN.jpg",
      "https://pbs.twimg.com/media/HSOxO2pbkAAV7v4.jpg"
    ]
  },
  {
    "trend": "849",
    "caption": "Even if i spend the whole day with you, i miss you the second you leave...🥺",
    "prompt": "Prompt 1 + Prompt 2: Create an ultra-realistic cinematic romantic lifestyle photograph of an adult couple... [beach cliff kiss + mountain lake embrace]",
    "images": [
      "https://pbs.twimg.com/media/HSMFT1DbwAAOlEU.jpg",
      "https://pbs.twimg.com/media/HSMFUZha8AA0LN8.jpg",
      "https://pbs.twimg.com/media/HSMFU7tboAAARN2.jpg"
    ]
  },
  {
    "trend": "848",
    "caption": "How do I look in draped red gown? ♥️",
    "prompt": "Create an ultra-realistic cinematic fashion editorial portrait of an adult woman... [sculptural crimson-red draped ensemble, 3 poses]",
    "images": [
      "https://pbs.twimg.com/media/HSK2xm2bQAAN-jO.jpg",
      "https://pbs.twimg.com/media/HSK2x7fa0AAcTn4.jpg",
      "https://pbs.twimg.com/media/HSK2yQ6aIAAmEPt.jpg"
    ]
  },
  {
    "trend": "847",
    "caption": "Modern pink studio portraits 🩷",
    "prompt": "Create an ultra-realistic cinematic fashion portrait of an adult woman seated elegantly on a minimalist black folding chair in a pastel-pink studio... [black-and-white outfit + thigh-highs]",
    "images": [
      "https://pbs.twimg.com/media/HSJo432asAA-7jy.jpg",
      "https://pbs.twimg.com/media/HSJo5PTbIAEPYXM.jpg",
      "https://pbs.twimg.com/media/HSJo5pfa0AAf5nS.jpg"
    ]
  }
];

const copyToClipboard = async (text, onSuccess, onError) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      if (onSuccess) onSuccess();
    } else {
      // Fallback for iframe environments
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
      document.body.prepend(textArea);
      textArea.select();
      
      const successful = document.execCommand('copy');
      textArea.remove();
      
      if (successful) {
         if (onSuccess) onSuccess();
      } else {
         if (onError) onError();
      }
    }
  } catch (error) {
    console.error("Clipboard copy failed", error);
    if (onError) onError();
  }
};

const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500 text-white px-4 py-3 rounded-lg shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-300">
      <Check size={18} className="text-white" />
      <span className="font-medium text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 hover:bg-emerald-600 rounded-full p-1 transition-colors">
        <X size={16} />
      </button>
    </div>
  );
};

const PromptCard = ({ data, onClick, onCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = (e) => {
    e.stopPropagation();
    copyToClipboard(data.prompt, () => {
      setIsCopied(true);
      onCopy();
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div 
      onClick={() => onClick(data)}
      className="group relative flex flex-col bg-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all duration-300 shadow-xl"
    >
      {/* Image container focusing on 9:16 aspect ratio */}
      <div className="relative w-full aspect-[3/4] sm:aspect-[9/16] overflow-hidden bg-slate-900">
        <img 
          src={data.images[0]} 
          alt={`Trend ${data.trend}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { e.target.src = 'https://placehold.co/400x600/1e293b/a5b4fc?text=Image+Unavailable' }}
        />
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <div className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/10">
            <TrendingUp size={14} className="text-indigo-400" />
            #{data.trend}
          </div>
          
          {data.images.length > 1 && (
            <div className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2 py-1.5 rounded-lg flex items-center gap-1 border border-white/10">
              <ImageIcon size={14} />
              +{data.images.length - 1}
            </div>
          )}
        </div>

        {/* Quick Action Overlay (shows on hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
          <div className="bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="font-semibold text-sm">View Details</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow bg-slate-800">
        {data.caption && (
          <p className="text-slate-200 text-sm font-medium line-clamp-2 mb-3 h-10 leading-snug">
            {data.caption}
          </p>
        )}
        
        <div className="mt-auto pt-3 border-t border-slate-700 flex items-center justify-between">
          <p className="text-xs text-slate-400 truncate max-w-[70%]">
            {data.prompt.substring(0, 40)}...
          </p>
          
          <button 
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isCopied 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
            }`}
          >
            {isCopied ? <Check size={14} /> : <Copy size={14} />}
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailModal = ({ data, isOpen, onClose, onCopy }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImgIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const handleCopy = () => {
    copyToClipboard(data.prompt, () => {
      setIsCopied(true);
      onCopy();
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const nextImage = () => setCurrentImgIndex(p => (p + 1) % data.images.length);
  const prevImage = () => setCurrentImgIndex(p => (p === 0 ? data.images.length - 1 : p - 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl border border-slate-700/50 z-10">
        
        {/* Close button - Mobile (Absolute Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 md:hidden bg-black/50 text-white p-2 rounded-full backdrop-blur-md border border-white/10"
        >
          <X size={20} />
        </button>

        {/* Left: Image Viewer */}
        <div className="relative w-full md:w-1/2 bg-black flex items-center justify-center min-h-[40vh] md:min-h-[auto]">
          <img 
            src={data.images[currentImgIndex]} 
            alt={`Trend ${data.trend} view ${currentImgIndex + 1}`}
            className="max-w-full max-h-[50vh] md:max-h-[90vh] object-contain"
            onError={(e) => { e.target.src = 'https://placehold.co/600x900/1e293b/a5b4fc?text=Image+Unavailable' }}
          />
          
          {data.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm border border-white/10 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm border border-white/10 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {data.images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImgIndex ? 'bg-indigo-400 w-4' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: Content Details */}
        <div className="w-full md:w-1/2 flex flex-col max-h-[50vh] md:max-h-full overflow-y-auto bg-slate-800">
          
          {/* Header Area */}
          <div className="sticky top-0 bg-slate-800/90 backdrop-blur-md z-10 border-b border-slate-700 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-lg text-sm font-bold border border-indigo-500/30 flex items-center gap-1.5">
                <TrendingUp size={16} />
                Trend #{data.trend}
              </span>
            </div>
            {/* Desktop Close button */}
            <button 
              onClick={onClose}
              className="hidden md:flex text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 flex-grow flex flex-col gap-6">
            {data.caption && (
              <div>
                <h3 className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2 flex items-center gap-2">
                  <Heart size={14} className="text-pink-400" /> Creator Caption
                </h3>
                <p className="text-xl text-white font-medium leading-relaxed">
                  {data.caption}
                </p>
              </div>
            )}
            
            <div className="flex-grow">
              <h3 className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">
                Full AI Prompt
              </h3>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-700/50 relative group">
                <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-wrap selection:bg-indigo-500/30">
                  {data.prompt}
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Footer */}
          <div className="sticky bottom-0 bg-slate-800/90 backdrop-blur-md z-10 border-t border-slate-700 p-4 sm:p-6 flex justify-end">
            <button 
              onClick={handleCopy}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                isCopied 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
              }`}
            >
              {isCopied ? <Check size={18} /> : <Copy size={18} />}
              {isCopied ? 'Prompt Copied to Clipboard!' : 'Copy Full Prompt'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-indigo-500/30">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              PromptStore<span className="text-indigo-500">.in</span>
            </span>
          </div>
          <div className="text-sm font-medium text-slate-400 hidden sm:block">
            Curated AI Fashion & Portrait Prompts
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/0f172a/1e293b?text=+')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Masterpieces</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-8">
            Explore our curated gallery of high-quality AI prompts. Copy, tweak, and create stunning visual art in seconds.
          </p>
        </div>
      </div>

      {/* Grid Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROMPT_DATA.map((item, index) => (
            <PromptCard 
              key={index} 
              data={item} 
              onClick={setSelectedPrompt} 
              onCopy={() => showToast('Prompt copied to clipboard!')}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} PromptStore.in — Elevate Your AI Art.
        </p>
      </footer>

      {/* Modal and Toast Overlays */}
      <DetailModal 
        isOpen={!!selectedPrompt} 
        data={selectedPrompt} 
        onClose={() => setSelectedPrompt(null)} 
        onCopy={() => showToast('Prompt copied to clipboard!')}
      />
      
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
      />
      
    </div>
  );
}