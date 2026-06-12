import React from 'react';

const Testimonialcard = ({ review: reviewData }) => {
  // Destructuring based exactly on the data schema in image_fc2d28.png
  const { 
    review,          // The testimonial text string
    userName,        // The reviewer's name
    user_email,      // Used here in place of authorRole
    user_photoURL,   // The profile picture URL
    ratings          // Destructured in case you want to use it
  } = reviewData;

  return (
    <div className="card  mx-auto w-110 h-[360px] bg-base-100 rounded-[24px] p-8 my-10  shadow-2xl border-2 border-base-200/50">
      {/* Quote Icon */}
      <div className="text-6xl text-cyan-200 font-serif leading-none -mb-3 select-none">
        “
      </div>

      {/* Testimonial Text */}
      <p className="text-base-content/80 text-lg leading-relaxed mb-6">
        {review}
      </p>

      {/* Dashed Divider */}
      <div className="border-t-2 border-dashed border-emerald-900/30 mb-6"></div>

      {/* Author Profile Section */}
      <div className="flex items-center gap-4">
        {/* DaisyUI Avatar component */}
        <div className="avatar placeholder">
          <div className="w-16 h-16 rounded-full bg-[#07484E] text-neutral-content">
            {user_photoURL ? (
              <img src={user_photoURL} alt={userName} />
            ) : (
              // Fallback if no image is passed safely avoiding crash if userName is missing
              <span className="text-xl uppercase">
                {userName ? userName.charAt(0) : 'U'}
              </span>
            )}
          </div>
        </div>

        {/* Meta details */}
        <div>
          <h4 className="text-[#07484E] text-xl font-bold leading-tight">
            {userName}
          </h4>
          <p className="text-base-content/60 text-sm mt-1">
            {user_email}
          </p>
          {ratings && (
            <div className="text-amber-500 text-xs font-semibold mt-0.5">
              Rating: {ratings} / 5
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonialcard;