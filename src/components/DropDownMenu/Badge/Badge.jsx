import React from 'react'

function Badge() {
  function lighten(color, amount) {
    // Remove the hash if present
    color = color.replace(/^#/, "");
  
    // Convert 3-digit hex to 6-digit hex
    if (color.length === 3) {
      color = color.split("").map((c) => c + c).join("");
    }
    console.log("color",color)
    // Parse the hex into RGB components
    const num = parseInt(color, 16);
    console.log("num",num)
    let r = (num >> 16) ;
    console.log("r",r)
    let g = ((num >> 8) & 0x00ff) + amount;
    let b = (num & 0x0000ff) + amount;
  
    // Clamp each value to the [0, 255] range
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
  
    // Convert back to hex and return
    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}`;
  }
  
  // Example usage
  console.log("lightend",lighten("#3498db", 30)); // Lightens the color by adding 30 to each component
  
  return (
    <div>Badge</div>
  )
}

export default Badge