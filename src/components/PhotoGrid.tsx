import React from 'react';
import { PhotoCard } from './PhotoCard';

interface Photo {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
}

const photos: Photo[] = [
  { id: 1, title: "Title", date: "Updated today", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 2, title: "Title", date: "Updated yesterday", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 3, title: "Title", date: "Updated 2 days ago", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 4, title: "Title", date: "Updated today", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 5, title: "Title", date: "Updated yesterday", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 6, title: "Title", date: "Updated 2 days ago", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 7, title: "Title", date: "Updated today", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 8, title: "Title", date: "Updated yesterday", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 9, title: "Title", date: "Updated 2 days ago", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 10, title: "Title", date: "Updated today", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 11, title: "Title", date: "Updated yesterday", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
  { id: 12, title: "Title", date: "Updated 2 days ago", imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd9e5890606dd1f8831fb87461076e7db60e6a?width=243" },
];

export const PhotoGrid: React.FC = () => {
  const handlePhotoClick = (photoId: number) => {
    console.log(`Photo ${photoId} clicked`);
  };

  return (
    <main className="flex items-start content-start gap-2 self-stretch flex-wrap relative pt-0 pb-8 px-4 max-sm:justify-between">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          title={photo.title}
          date={photo.date}
          imageUrl={photo.imageUrl}
          onClick={() => handlePhotoClick(photo.id)}
        />
      ))}
    </main>
  );
};
