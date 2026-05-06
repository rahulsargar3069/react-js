import Cards from './Components/Cards'
import './App.css'

function App() {
  const portfolio= [
  {
    img: "https://i.pinimg.com/736x/9e/c0/f8/9ec0f877571edc437f89c15c08081533.jpg",
    fullName: "Liam Carter",
    role: "UI/UX Designer",
    pay: "$60/hr",
    type: "Epic Coder",
    skill1: "UI",
    skill2: "UX",
    skill3: "Wireframing",
    skillNum: "+3",
    isAvailable : true,
    bio: "Liam is a 26 year old UI/UX designer with a strong portfolio of modern interfaces."
  },
  {
    img: "https://i.pinimg.com/736x/b1/ca/5a/b1ca5af9e3e6554d4e75c843cfcc021c.jpg",
    fullName: "Olivia Green",
    role: "Mobile Designer",
    pay: "$55/hr",
    type: "Freelancer",
    skill1: "Figma",
    skill2: "Sketch",
    skill3: "Prototyping",
    skillNum: "+4",
    isAvailable :false,
    bio: "Olivia is a 24 year old mobile designer with creative app designs in her portfolio."
  },
  {
    img: "https://i.pinimg.com/736x/73/f5/b3/73f5b3a9368f4c8aae16eb6a72691244.jpg",
    fullName: "Noah White",
    role: "Photographer",
    pay: "$50/hr",
    type: "Visual Madness",
    skill1: "Lightroom",
    skill2: "Portraits",
    skill3: "Editing",
    skillNum: "+2",
    isAvailable : true,
    bio: "Noah is a 29 year old photographer with an impressive portfolio of creative shots."
  },
  {
    img: "https://i.pinimg.com/736x/2a/85/9b/2a859b2baf84fb1195ed12d28783b22b.jpg",
    fullName: "Emma Johnson",
    role: "Web Developer",
    pay: "$70/hr",
    type: "Freelancer",
    skill1: "React",
    skill2: "Node.js",
    skill3: "CSS",
    skillNum: "+3",
    isAvailable : false,
    bio: "Emma is a 27 year old web developer with a strong portfolio of modern projects."
  },
  {
    img: "https://i.pinimg.com/736x/b9/30/b8/b930b83d7d0940160b010186fc2ee770.jpg",
    fullName: "James Brown",
    role: "Creative Designer",
    pay: "$65/hr",
    type: "Visual Madness",
    skill1: "Illustrator",
    skill2: "InDesign",
    skill3: "Concept Art",
    skillNum: "+4",
    isAvailable : true,
    bio: "James is a 30 year old creative designer with a unique portfolio of abstract works."
  },
  {
    img: "https://i.pinimg.com/736x/ce/19/ac/ce19acfeb6ffdd481070f372140018d3.jpg",
    fullName: "Sophia Miller",
    role: "UI Specialist",
    pay: "$58/hr",
    type: "Epic Coder",
    skill1: "UI",
    skill2: "Accessibility",
    skill3: "Design Systems",
    skillNum: "+3",
    isAvailable : true,
    bio: "Sophia is a 25 year old UI specialist with an impressive portfolio of accessible designs."
  },
  {
    img: "https://i.pinimg.com/736x/2c/03/d9/2c03d9b403feae8434efcd6c9a0695a6.jpg",
    fullName: "Benjamin Davis",
    role: "UX Researcher",
    pay: "$62/hr",
    type: "Freelancer",
    skill1: "User Research",
    skill2: "Wireframes",
    skill3: "Prototyping",
    skillNum: "+2",
    isAvailable :false,
    bio: "Benjamin is a 28 year old UX researcher with a portfolio of user-centered projects."
  },
  {
    img: "https://i.pinimg.com/736x/61/da/eb/61daeb9ef571c0450c49f970773d924a.jpg",
    fullName: "Charlotte Wilson",
    role: "Photographer",
    pay: "$48/hr",
    type: "Visual Madness",
    skill1: "Landscape",
    skill2: "Portraits",
    skill3: "Photoshop",
    skillNum: "+3",
    isAvailable : true,
    bio: "Charlotte is a 32 year old photographer with a diverse portfolio of creative shots."
  },
  {
    img: "https://i.pinimg.com/736x/1b/41/4f/1b414f51e36c3bd638488fa9464ccc71.jpg",
    fullName: "Ethan Moore",
    role: "Mobile Designer",
    pay: "$54/hr",
    type: "Freelancer",
    skill1: "UI",
    skill2: "UX",
    skill3: "Animation",
    skillNum: "+4",
    isAvailable : true,
    bio: "Ethan is a 26 year old mobile designer with an impressive portfolio of app designs."
  },
  {
    img: "https://i.pinimg.com/736x/65/da/7c/65da7ccac53f12614141f2817b7d90bb.jpg",
    fullName: "Amelia Taylor",
    role: "Creative Designer",
    pay: "$63/hr",
    type: "Visual Madness",
    skill1: "Illustration",
    skill2: "Typography",
    skill3: "Branding",
    skillNum: "+2",
    isAvailable :false,
    bio: "Amelia is a 29 year old creative designer with a portfolio full of branding projects."
  }
];


  return (
    <div className='Parent'>
    {portfolio.map(function(elem){
          return <Cards
          isAvailable={elem.isAvailable}
          img={elem.img}
          fullName={elem.fullName}
          role={elem.role}
          pay={elem.pay}
          type={elem.type}
          skill1={elem.skill1}
          skill2={elem.skill2}
          skill3={elem.skill3}
          skillNum={elem.skillNum}
          bio={elem.bio}
          />
    })}
     
    </div>
  )
}

export default App
