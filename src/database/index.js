const employeeDB = [
  {
    id: 1,
    full_name: "John Doe",
    occupation: "Software Engineer",
    gender: "Male"
  },
  {
    id: 2,
    full_name: "Jane Doe",
    occupation: "Digital Marketer",
    gender: "Female"
  },
  {
    id: 3,
    full_name: "Seto Siseto",
    occupation: "CEO",
    gender: "Male"
  },
]

const userDB = [
  {
    username: "seto",
    password: "password"
  },
  {
    username: "bill",
    password: "password"
  },
  {
    username: "mark",
    password: "password"
  },
]

const postsDB = [
  {
    userId: 1,
    location: "Ukraine",
    image_url: "https://preview.redd.it/wsoh5uuewxj31.jpg?auto=webp&s=e9ea562304f5f516e99b789edea2921dd9806c27",
    number_of_likes: 213424,
    caption: "When thanos snaps and ur dick turns into dust inside that pussy",
    id: 1
  },
  {
    userId: 1,
    location: "No More Racism",
    image_url: "https://preview.redd.it/8uqk7an3wbz21.jpg?auto=webp&s=c91b7cdcb4a509fd7f8da9b843fb975e0bbf8b26",
    number_of_likes: 53451,
    caption: "Wait holup is that a monkey?????",
    id: 2
  },
  {
    userId: 1,
    location: "Area 51",
    image_url: "https://ahseeit.com/anime/king-include/uploads/2021/02/125198641_1095653730876747_5353216878246094970_n-9712893570.jpg",
    number_of_likes: 123534,
    caption: "Damn bruh, i thought id get some good alien cheeks tonight. Somehow got my cheeks clapped by 12 inch long tentacles. smh",
    id: 3
  },
  {
    userId: 1,
    location: "Bekasi",
    caption: "haha",
    image_url: "https://preview.redd.it/tgzqetdqzyi41.png?width=640&crop=smart&auto=webp&s=e3e220432f52b9a56b0c80a2fcec8ec65ed89a10",
    number_of_likes: 0,
    id: 4
  }
]

module.exports = {
  employeeDB,
  userDB,
  postsDB
}