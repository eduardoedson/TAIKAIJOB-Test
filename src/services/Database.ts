const Skills: { [key: string]: any } = {
  0 : 'All',
  1 : 'HTML',
  2 : 'JavaScript',
  3 : 'CSS',
  4 : 'Python',
  5 : 'PHP',
  6 : 'ReactJS',
  7 : 'React Native',
  8 : 'Node.JS',
  9 : 'Java',
}

const companyTypes: { [key: string]: any } = {
  10 : 'All',
  11 : 'Software House',
  12 : 'Healthcare',
  13 : 'Marketplace',
} 

const jobTypes: { [key: string]: any } = {
  14 : 'All',
  15 : 'Full Time',
  16 : 'Contract',
  17 : 'Internship',
}

const Countries: { [key: string]: any } = {
  18 : 'All',
  19 : 'Brazil',
  20 : 'Croatia',
  21 : 'Ghana',
  22 : 'Portugal',
  23 : 'Switzerland',
}

const Jobs = [
  { 
    id : 24,
    tittle : 'Junior Software Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet justo pharetra ipsum gravida tempus tempor at lectus. Sed pretium nunc nec sem viverra, ut porttitor odio varius. Suspendisse varius mauris arcu, ut pretium ante vestibulum ac. Donec vestibulum condimentum sem, sed accumsan turpis hendrerit in. Vestibulum non euismod risus. Integer vehicula mauris in diam placerat placerat sed at nisl. Sed pulvinar ornare porttitor. Pellentesque maximus porttitor est, sed rutrum nisi tincidunt in. Duis tempus, eros ac cursus consequat, libero nibh scelerisque nisl, tincidunt luctus arcu justo eu magna. Integer ullamcorper risus id mauris malesuada viverra. Sed molestie accumsan sapien nec accumsan. Phasellus a libero arcu.',
    skills : [1, 4, 3],
    companyType : 12,
    jobType : 16,
    location : 23,
  },
  { 
    id : 25,
    tittle : 'Front-End Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet justo pharetra ipsum gravida tempus tempor at lectus. Sed pretium nunc nec sem viverra, ut porttitor odio varius. Suspendisse varius mauris arcu, ut pretium ante vestibulum ac. Donec vestibulum condimentum sem, sed accumsan turpis hendrerit in. Vestibulum non euismod risus. Integer vehicula mauris in diam placerat placerat sed at nisl. Sed pulvinar ornare porttitor. Pellentesque maximus porttitor est, sed rutrum nisi tincidunt in. Duis tempus, eros ac cursus consequat, libero nibh scelerisque nisl, tincidunt luctus arcu justo eu magna. Integer ullamcorper risus id mauris malesuada viverra. Sed molestie accumsan sapien nec accumsan. Phasellus a libero arcu.',
    skills : [9, 1, 2, 8],
    companyType : 13,
    jobType : 15,
    location : 19,
  },
  { 
    id : 26,
    tittle : 'Senior Python Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet justo pharetra ipsum gravida tempus tempor at lectus. Sed pretium nunc nec sem viverra, ut porttitor odio varius. Suspendisse varius mauris arcu, ut pretium ante vestibulum ac. Donec vestibulum condimentum sem, sed accumsan turpis hendrerit in. Vestibulum non euismod risus. Integer vehicula mauris in diam placerat placerat sed at nisl. Sed pulvinar ornare porttitor. Pellentesque maximus porttitor est, sed rutrum nisi tincidunt in. Duis tempus, eros ac cursus consequat, libero nibh scelerisque nisl, tincidunt luctus arcu justo eu magna. Integer ullamcorper risus id mauris malesuada viverra. Sed molestie accumsan sapien nec accumsan. Phasellus a libero arcu.',
    skills : [4],
    companyType : 12,
    jobType : 15,
    location : 21,
  },
  { 
    id : 27,
    tittle : 'Internship PHP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet justo pharetra ipsum gravida tempus tempor at lectus. Sed pretium nunc nec sem viverra, ut porttitor odio varius. Suspendisse varius mauris arcu, ut pretium ante vestibulum ac. Donec vestibulum condimentum sem, sed accumsan turpis hendrerit in. Vestibulum non euismod risus. Integer vehicula mauris in diam placerat placerat sed at nisl. Sed pulvinar ornare porttitor. Pellentesque maximus porttitor est, sed rutrum nisi tincidunt in. Duis tempus, eros ac cursus consequat, libero nibh scelerisque nisl, tincidunt luctus arcu justo eu magna. Integer ullamcorper risus id mauris malesuada viverra. Sed molestie accumsan sapien nec accumsan. Phasellus a libero arcu.',
    skills : [1, 2, 3, 5],
    companyType : 13,
    jobType : 17,
    location : 22,
  },
  { 
    id : 28,
    tittle : 'Internship PHP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet justo pharetra ipsum gravida tempus tempor at lectus. Sed pretium nunc nec sem viverra, ut porttitor odio varius. Suspendisse varius mauris arcu, ut pretium ante vestibulum ac. Donec vestibulum condimentum sem, sed accumsan turpis hendrerit in. Vestibulum non euismod risus. Integer vehicula mauris in diam placerat placerat sed at nisl. Sed pulvinar ornare porttitor. Pellentesque maximus porttitor est, sed rutrum nisi tincidunt in. Duis tempus, eros ac cursus consequat, libero nibh scelerisque nisl, tincidunt luctus arcu justo eu magna. Integer ullamcorper risus id mauris malesuada viverra. Sed molestie accumsan sapien nec accumsan. Phasellus a libero arcu.',
    skills : [1, 2, 3, 6, 7, 8],
    companyType : 12,
    jobType : 15,
    location : 23,
  },
]


export { Skills, companyTypes, jobTypes, Countries, Jobs }