import React from 'react'
import Card from './Components/Card'

const App = () => {
  
  const jobOpening = [
  {
    brandLogo: "https://i.pinimg.com/736x/32/4a/90/324a90ab3638842fc9dc738f9b65f198.jpg",
    CompanyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/64/bc/46/64bc46f9bd44b3d44f498746fb8ee058.jpg",
    CompanyName: "Google",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Fresher",
    pay: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/58/a2/ac/58a2acfbe94194656768a2c8ff3d7ef6.jpg",
    CompanyName: "Microsoft",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/ed/c6/74/edc674b7a3633daecb0ad6fed31ad269.jpg",
    CompanyName: "Flipkart",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Part-Time",
    tag2: "Fresher",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/47/ab/d6/47abd6ca95faee1b8a4d69d5bd54149e.jpg",
    CompanyName: "Tesla",
    datePosted: "1 month ago",
    post: "AI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$200/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/e0/6c/06/e06c061bc3c7558aefe2fbe49e2ca4c3.jpg",
    CompanyName: "Meta",
    datePosted: "4 weeks ago",
    post: "React Developer",
    tag1: "Full-Time",
    tag2: "Fresher",
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/f4/e7/d5/f4e7d5fa3436c0e96a15f43b76d0ec12.jpg",
    CompanyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/ea/60/e2/ea60e224dd6d009926b751998e011154.jpg",
    CompanyName: "Netflix",
    datePosted: "8 weeks ago",
    post: "UI Designer",
    tag1: "Full-Time",
    tag2: "Fresher",
    pay: "$75/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/16/38/1f/16381f7c2b21da49b1afb3529c46f41a.jpg",
    CompanyName: "Spotify",
    datePosted: "2 days ago",
    post: "Data Analyst",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
    CompanyName: "Adobe",
    datePosted: "7 weeks ago",
    post: "Graphic Designer",
    tag1: "Part-Time",
    tag2: "Fresher",
    pay: "$65/hr",
    location: "Chennai, India"
  }
];

  return (
    <div className="parent"> 
     {jobOpening.map(function(elem){
      return <Card  
      company={elem.CompanyName} 
      logo={elem.brandLogo} 
      datePosted={elem.datePosted}
      post={elem.post}
      tag1={elem.tag1}
      tag2={elem.tag2}
      pay={elem.pay}
      location={elem.location}
      />
     })}
    </div>
  )
}

export default App
