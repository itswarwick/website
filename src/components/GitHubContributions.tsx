'use client';

import GitHubCalendar from 'react-github-calendar';

const GitHubContributions = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-2">
      <div className="p-4 bg-white rounded-xl border border-gray-200">
        <GitHubCalendar 
          username="itswarwick"
          year={2025}
          fontSize={10}
          blockSize={10}
          blockMargin={3}
          colorScheme="light"
          style={{
            color: 'black',
            margin: '0 auto',
          }}
        />
      </div>
    </div>
  );
};

export default GitHubContributions; 