"use client"; // This is a client component 👈🏽
import FilePicker from '@/components/file-picker/FilePicker'
import Image from 'next/image'
import { useState } from 'react';
import { v4 } from "uuid";
import { Button, Progress } from '@mantine/core';
import { storage } from '@/firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useRecoilState } from 'recoil';
import { FilesPicked, UploadPercentages } from '@/recoil/atoms';
import DataPage from './dataPage';
import axios from 'axios'
import bgImage from './banner19.jpg'

export default function Home() {
  const [urls, setUrls] = useState<string[]>([]);
  const [FilesToUpload, setFilesToUpload] = useRecoilState<File[]>(FilesPicked);
  const [isLoading, setIsLoading] = useState(false)
  const [Percentages, setPercentages] = useRecoilState<number[]>(UploadPercentages);

  // submit files
  const handleFileSubmit = async () => {
    if (FilesToUpload.length == 0 || FilesToUpload == null) return
    // const percents: number[] = []
    setPercentages(Array(FilesToUpload.length).fill(0));
    setIsLoading(true)
    const promiseArray = FilesToUpload.map((file, i) => {
      
      return new Promise((resolve, reject) => {
        const fileRef = ref(storage, `files/${file.name + v4()}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on("state_changed",
          (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            
            setPercentages(prevPercentages => {
              const updatedPercentages = [...prevPercentages];
              updatedPercentages[i] = progress;
              return updatedPercentages;
            });
          },
          (error) => {
            setIsLoading(false)
            alert(error);
            reject(error); // Reject the promise in case of an error
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUrls([...urls, downloadURL]);
              resolve(downloadURL); // Resolve the promise with the downloadURL
            });
          });
      });
    });


    Promise.allSettled(promiseArray).then(() => {
      setIsLoading(false)
      // faire du traitement quand tout les upload sont terminés
    });



  }

  function handleFilesSelect(files: File[]) {
    setFilesToUpload([...FilesToUpload, ...files]) 
  }

  return (
    <main className="h-full min-h-screen p-5 bg-green-400">
      <div className="flex flex-col items-center justify-between">
        <div className="">
          <Image
            className="relative"
            src={bgImage}
            alt=""
            width={1950}
            height={865}
            priority
          />

          <h1 className='text-xl font-extrabold text-gray-200'>TEAM UBUNTU</h1>
        </div>
      </div>

      <div className={`mx-auto md:mt-10 my-4 p-5 md:p-8 md:w-5/5 bg-pink-600 rounded-2xl text-gray-200`}>
        <h2 className="text-[26px] mb-10 font-semibold">Upload Images</h2>
        <FilePicker onChange={(files: File[]) => handleFilesSelect(files)}
          className="md:mt-10"
          isMultiple={true}
          accepts={["image/png", "image/jpeg"]}
          formatList="PNG, JPG, WebP, SVG, PDF"
          percentages={Percentages}
        />
      </div>

      {/* {FilesToUpload.length > 0 &&
        <div className="mt-5 w-full flex ">
          <Button loading={isLoading} loaderPosition="center" className='mx-auto' size='lg' radius="sm" onClick={handleFileSubmit}>
            Submit for analysis
          </Button>
        </div>} */}
          <div className='md:w-5/5'>
          <DataPage />

          </div>
    </main>
  )
}