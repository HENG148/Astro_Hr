// import React from 'react';
// import { useParams } from 'next/navigation';
// import { allJobs } from '@/data/types/job';

// const JobDetail = () => {
//   const { id } = useParams();
//   const job = allJobs.find(job => job.id === parseInt(id));

//   if (!job) {
//     return <div>Job not found</div>;
//   }

//   return (
//     <div className="job-detail-container">
//       <header className="job-header">
//         <h1>{job.title} ({job.jobCode})</h1>
        
//         <div className="job-meta">
//           <span>Salary: {job.salary}</span>
//           <span>Job Type: {job.type}</span>
//           <span>Job Level: {job.level}</span>
//           <span>Gender: {job.gender}</span>
//           <span>Age: {job.age}</span>
//           <span>Experience: {job.experience}</span>
//           <span>Language: {job.language}</span>
//         </div>
        
//         <div className="job-meta-secondary">
//           <span>Category: {job.category}</span>
//           <span>Industry: {job.industry}</span>
//           <span>Location: {job.location}</span>
//           <span>Qualification: {job.qualification}</span>
//           <span>Available Position: {job.openings} pax</span>
//         </div>
        
//         <div className="job-dates">
//           <span>Published date: {job.postedDate}</span>
//           <span>Closing date: {job.closingDate}</span>
//         </div>
//       </header>

//       <div className="job-content">
//         <section className="job-description">
//           <h2>Job Description</h2>
//           <p>{job.description}</p>
//         </section>

//         <section className="job-requirements">
//           <h2>Job Requirement</h2>
//           <ul>
//             {job.requirements.map((req, index) => (
//               <li key={index}>{req}</li>
//             ))}
//           </ul>
//         </section>

//         <section className="job-responsibilities">
//           <h2>Job Responsibility</h2>
//           <ul>
//             {job.responsibilities.map((resp, index) => (
//               <li key={index}>{resp}</li>
//             ))}
//           </ul>
//         </section>

//         <section className="job-skills">
//           <h2>Required Skills</h2>
//           <div className="skill-tags">
//             {job.skills.map((skill, index) => (
//               <span key={index} className="skill-tag">{skill}</span>
//             ))}
//           </div>
//         </section>
//       </div>

//       <footer className="job-footer">
//         <h3>Contact us</h3>
//         <p>If you have any questions, please feel free to let us know</p>
        
//         <div className="contact-info">
//           <p>📍 {job.contact.address}</p>
//           <p>📞 {job.contact.phone}</p>
//           <p>✉️ {job.contact.email}</p>
//           <p>⏰ {job.contact.workingHours}</p>
//         </div>

//         <button className="apply-button">Apply now</button>
        
//         <div className="social-share">
//           <span>Share:</span>
//           <button>💬</button>
//           <button>💭</button>
//           <button>💮</button>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default JobDetail;