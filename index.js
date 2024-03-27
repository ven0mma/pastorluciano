// Helper function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Helper function to calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

// Main function to calculate and display area and perimeter
function calculateRectangleProperties(length, width) {
    const area = calculateArea(length, width);
    const perimeter = calculatePerimeter(length, width);
    console.log("Rectangle Properties:");
    console.log("Area: " + area);
    console.log("Perimeter: " + perimeter);
}

// Example usage
const length = 5;
const width = 3;
calculateRectangleProperties(length, width);
