import React from 'react'
import Card from './components/Card';



const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: 50,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer (Node.js)",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 75,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 58,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUlsZ4o4t-LmXuUQZ4pTDGtfHgQ6mV4xPIA&s",
    companyName: "NVIDIA",
    datePosted: "8 weeks ago",
    post: "Software Engineer – AI Tools",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/uber-new-logo-2018-11550112725dlrgv5nhdy.png",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: 62,
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPgPCQ5o_XNfriYRAbp1UKCW8opXlkJZNqQ&s",
    companyName: "Airbnb",
    datePosted: "10 weeks ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 78,
    location: "Kathmandu, Nepal"
  }
];


return (
   <div className="parent">
    {jobOpenings.map(function(elem){
    return <Card Company={elem.companyName} Logo={elem.brandLogo} Date={elem.datePosted} Post={elem.post} Tag1={elem.tag1} Tag2={elem.tag2} Pay={elem.pay} Location={elem.location} />
      
    })}
    
   </div>
  )
}

export default App