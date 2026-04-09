"use client";

import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/lib/cropImage';
import { Upload, X, Crop as CropIcon } from 'lucide-react';

interface ImageCropperProps {
  onCropComplete: (base64Image: string) => void;
  aspectRatio?: number;
  label?: string;
}

export default function ImageCropper({ onCropComplete, aspectRatio = 1, label = "Upload Image" }: ImageCropperProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setIsModalOpen(true);
    }
  };

  const onCropCompleteHandler = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      if (imageSrc && croppedAreaPixels) {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        if (croppedImage) {
          onCropComplete(croppedImage);
          closeModal();
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, onCropComplete]);

  const closeModal = () => {
    setIsModalOpen(false);
    setImageSrc(null);
  };

  return (
    <div>
      <label className="flex items-center space-x-2 bg-white/5 border border-white/20 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors text-white text-sm w-max">
        <Upload size={16} />
        <span>{label}</span>
        <input type="file" accept="image/*" onChange={onFileChange} className="hidden" />
      </label>

      {isModalOpen && imageSrc && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl w-full max-w-2xl relative flex flex-col h-[600px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white font-orbitron flex items-center">
                <CropIcon size={20} className="mr-2" /> Adjust Photo
              </h3>
              <button onClick={closeModal} className="text-white/50 hover:text-white p-1 rounded-full bg-white/5">
                <X size={20} />
              </button>
            </div>
            
            <div className="relative flex-1 bg-black rounded-xl overflow-hidden mb-4 border border-white/10">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspectRatio}
                onCropChange={setCrop}
                onCropComplete={onCropCompleteHandler}
                onZoomChange={setZoom}
                showGrid={false}
                style={{
                  containerStyle: { background: '#000' }
                }}
              />
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-white/60 text-sm">Zoom</span>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
              <button 
                onClick={showCroppedImage}
                className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90"
              >
                Apply Crop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function readFile(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result as string), false);
    reader.readAsDataURL(file);
  });
}
