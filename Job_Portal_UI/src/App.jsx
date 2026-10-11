
import Card from './components/Card'


// const App = () => {
//   const arr = [
//     {
//       user:'Sarthak',
//       age:20
//     },
//     {
//       user: 'Aman'
//       ,age:10
//     }, 
//     {user:'Anuja',
//       age:26

//     }];
  // arr.forEach(function(elem){
  //   // console.log(elem);
  //     console.log(arr);
      
  // })


  const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {
      /* {/* <User name={arr} /> */}
      {/* {arr.map(function(elem){
        // return <h1>{elem+2}</h1>
        console.log(elem.age);
      })} */}
     
      {
      jobOpenings.map(function (elem,idx) {
        return (
        <Card key={idx}  company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2}
        pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted} location={elem.location}/>
        )
        
        // <h1>Hey</h1>
        // <div key={idx}>
        //   <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        // </div>
      })
      }

     
     

     
    </div>
  )
}

export default App