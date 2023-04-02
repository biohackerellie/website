import React from "react";

function PortItem({title, imgUrl, stack, link}) {
  return (
    <div>
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
          <h3 className = "text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
          <p>
            {stack.map(item => (
              <span>
                {item}
              </span>
            ))}
          </p>
        </div>
    </div>
  )
}

export default PortItem;