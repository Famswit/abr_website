import EpisodeDetails from '@/components/episodePage/EpisodeDetails'
import NextEpisode from '@/components/episodePage/NextEpisode'
import NeverStopListening from '@/components/landingPage/NeverStopListening'
import React from 'react'

const page = () => {
  return (
    <div>
      <EpisodeDetails />
      <NextEpisode />
      <NeverStopListening />
    </div>
  )
}

export default page
