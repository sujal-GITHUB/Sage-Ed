const ReviewCard = ({ name, rating, text }) => (
    <div className="p-4 bg-white border-2 border-black">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-bold">{name}</span>
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="text-sm ml-1">{rating}</span>
        </div>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  )
  
  const Reviews = ({ rating, totalReviews, reviews }) => {
    return (
      <div className="p-6 bg-pink-200 border-2 border-black">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{rating}</span>
              <span className="text-sm">/ 5.0</span>
              <button className="text-sm underline">See stats</button>
            </div>
            <div className="text-sm">{totalReviews} rates from students</div>
          </div>
          
          {/* Simplified graph representation */}
          <div className="w-32 h-16 bg-white border-2 border-black p-2">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxsaW5lIHgxPSIwIiB5MT0iNTAlIiB4Mj0iMTAwJSIgeTI9IjMwJSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    )
  }
  
  export default Reviews
  