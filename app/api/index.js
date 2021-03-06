import { v4 } from 'node-uuid';

const mockDatabase = {
  videos: [
    {
      id: v4(),
      name: 'Video 1',
      location: 'Chapel Hill, NC',
      date: '10/1/2016',
      uploaded: false,
      flagged: true,
      uri: '../static/cam1.mp4',
    },
    {
      id: v4(),
      name: 'Video 2',
      location: 'Durham, NC',
      date: '10/2/2016',
      uploaded: true,
      flagged: false,
      uri: '../static/cam2.mp4',
    },
    {
      id: v4(),
      name: 'Video 3',
      location: 'Raleigh, NC',
      date: '10/3/2016',
      uploaded: false,
      flagged: true,
      uri: '../static/cam3.mp4',
    },
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchVideos = (filter) => // eslint-disable-line import/prefer-default-export
  delay(1000).then(() => {
    if (Math.random() > 0.7) {
      throw new Error('Network Error! Videos could not be fetched.');
    }

    switch (filter) {
      case 'All':
        return mockDatabase.videos;
      case 'Uploaded':
        return mockDatabase.videos.filter(t => t.uploaded);
      case 'Flagged':
        return mockDatabase.videos.filter(t => t.flagged);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const toggleVideo = (id) =>
  delay(500).then(() => {
    const video = mockDatabase.videos.find(v => v.id === id);
    video.flagged = !video.flagged;
    return video;
  });
