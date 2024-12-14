// import React from "react";
// import Link from "next/link";

// export default function NewsSection() {
//   const layoutStyle = {
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '20px',
//   };

//   const imageWrapperStyle = {
//     flex: '0 0 40%',
//     marginLeft: '-169px',
//     height: '540px',
//   };

//   const cardsWrapperStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)', // 3 cards per row
//     gridGap: '35px',
//     marginLeft:'33px'
//   }

//   const cardStyle = {
//     padding: '20px',
//     border: '1px solid lightgray',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     height: '252px',
//     width:'263px'
//   };

//   const newsItems = [
//     { id: 1, link: '/news/1' },
//     { id: 2, link: '/news/2' },
//     { id: 3, link: '/news/3' },
//     { id: 4, link: '/news/4' },
//     { id: 5, link: '/news/5' },
//     { id: 6, link: '/news/6' },
//   ];

//   return (
//     <section className="layout-pt-lg layout-pb-md">
//       <div className="container">
//         <div className="row justify-center">
//           <div className="col-12">
//             <div style={layoutStyle}>
              
//               {/* Image on the left */}
//               <div style={imageWrapperStyle}>
//                 <img
//                   src="/assets/img/event-list/Seoak NEWS.png" // Replace with your image path
//                   alt="Top Banner"
//                   style={{ width: '100%', height: '100%', borderRadius: '8px' }}
//                 />
//               </div>
              
//               {/* Cards on the right */}
//               <div style={cardsWrapperStyle}>
//                 {newsItems.map((news, i) => (
//                   <div key={i} style={cardStyle} data-aos="fade-up" data-aos-duration={(i + 1) * 350}>
//                     <div>
//                       <h4 className="text-17 lh-15 fw-500">
//                         News Logo
//                       </h4>
//                       <p>One Line of news should be visible here</p>
//                     </div>

//                     <div style={{ marginTop: 'auto' }}>
//                       <Link href={news.link} className="button -icon -orange-1 text-white">
//                         Read More
//                         <i className="icon-arrow-top-right text-13 ml-10"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import Link from "next/link";

export default function NewsSection() {
  const layoutStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
  };

  const imageWrapperStyle = {
    flex: '0 0 40%',
    marginLeft: '-160px',
    height: '540px',
  };

  const cardsWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 cards per row
    gridGap: '35px', // Space between cards
  };

  const cardStyle = {
    padding: '20px',
    border: '1px solid lightgray',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '252px', // Fixed height for consistency
  };

  const newsItems = [
    { id: 1, link: '/news/1' },
    { id: 2, link: '/news/2' },
    { id: 3, link: '/news/3' },
    { id: 4, link: '/news/4' },
    { id: 5, link: '/news/5' },
    { id: 6, link: '/news/6' },
  ];

  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div style={layoutStyle}>
              
              {/* Image on the left */}
              <div style={imageWrapperStyle}>
                <img
                  src="/assets/img/event-list/Seoak NEWS.png" // Replace with your image path
                  alt="Top Banner"
                  style={{ width: '100%', height: '100%', borderRadius: '8px' }}
                />
              </div>
              
              {/* Cards on the right */}
              <div style={cardsWrapperStyle}>
                {newsItems.map((news, i) => (
                  <div key={i} style={cardStyle} data-aos="fade-up" data-aos-duration={(i + 1) * 350}>
                    <div>
                      <h4 className="text-17 lh-15 fw-500">
                        News Logo
                      </h4>
                      <p>One Line of news should be visible here</p>
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                      <Link href={news.link}>
                        <button style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: 'blue',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          padding: 0,
                        }}>
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
