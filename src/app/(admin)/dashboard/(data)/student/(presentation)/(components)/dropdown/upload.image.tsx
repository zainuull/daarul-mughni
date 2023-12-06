'use client';

import { GoUpload } from 'react-icons/go';
import Image from 'next/image';
import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
import useViewModel from '../../vm/view.model';
import React, { useState } from 'react';
import useDataStudent from '../../store/store.student';
import { NotifyService } from '@/core/services/notify/notifyService';

export const UploadImage = () => {
  const { deleteImage } = useViewModel();
  const [publicId, setPublicId] = useState('');
  const [data, setData] = useDataStudent();
  const notifyService = new NotifyService();

  const handleUploadImage = (res: CldUploadWidgetResults) => {
    const info = res.info as object;

    if ('secure_url' in info && 'public_id' in info) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;

      setData({ ...data, public_id: public_id, image: url });
      setPublicId(public_id);
    }
  };

  const handleDeleteImage = async (e: React.FormEvent) => {
    e.preventDefault();
    //  deleteImage(data?.public_id)
    //   .then(() => {
    //     setData({ ...data, public_id: '', image_url: '' });
    //   })
    //   .catch((err) => {
    //     HandleError(err);
    //   });
    notifyService.confirmationDelete().then(async (res) => {
      if (res) {
        try {
          const res = await fetch(`/api/delete-image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ publicId }),
          });
          if (res.ok) {
            setData({ ...data, public_id: '', image: '' });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onUpload={handleUploadImage}
        className={`relative w-full h-52 bg-slate-100 flex items-center justify-center ${
          data?.image && 'pointer-events-none'
        }`}>
        <GoUpload size={50} />
        {data?.image && (
          <Image
            src={data?.image}
            alt={data?.name}
            width={300}
            height={300}
            className="absolute w-full h-52 object-cover inset-0"
          />
        )}
      </CldUploadButton>
      {data?.image && (
        <button
          onClick={handleDeleteImage}
          className="bg-red-600 text-white py-2 text-sm rounded-lg w-[150px] hover:bg-red-700 transition-all mx-2">
          Delete Image
        </button>
      )}
    </>
  );
};
