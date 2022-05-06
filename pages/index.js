import MeetupList from '../components/meetups/MeetupList'

const Dummy_Meetups = [
  {
    id: 'm1',
    title: 'Cesears Palace',
    image: "https://assets.simpleviewcms.com/simpleview/image/fetch/c_fill,g_center,h_610,q_75,w_814/https://lasvegas.simpleviewcrm.com/images/listings/original_CPLV_Exterior_DaveBurk-06-2016_160401_001-LVCC-Resize-e01dc113f2ffb75.jpg",
    address: '3570 South Las Vegas Boulevard, Las Vegas, NV',
    description: "Meetup @ 3pm on 5/25 for Gambling and Drinks"

  },
  {
    id:  'm2',
    title: 'Resorts World',
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Resorts_World_Las_Vegas_%28Sep_2021%29.jpg",
    address: "3000 S Las Vegas Blvd, Las Vegas, NV",
    description: "meetup @ 9pm on 5/25 for dinner"
  }
]

const HomePage = () => {
  return (
    <MeetupList meetups={Dummy_Meetups} />
  )
}

export default HomePage;