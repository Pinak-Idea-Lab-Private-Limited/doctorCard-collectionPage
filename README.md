# doctorCard-collectionPage

# 1.Modal Components

There are modals used in this repo

1. **Doctor Card - About Section Display Modal**
   - Usage: Triggered by a JavaScript function `showAndHideModal('hide')`.

2. **Ratings Icon Modal**

   - Usage: Triggered by a JavaScript function `ratingModalToggle('hide')`.

3. **Top Heading Content Info Display Modal**
   - Usage: Triggered by a JavaScript function `infoModalToggle('hide')`.

# 2.Website Navbar and Flyouts

- **Home Button**: A simple button with no flyout functionality.
- **Cities Button**: This button toggles the "Cities" flyout menu when clicked.
- **Resources Button**: This button toggles the "Resources" flyout menu when clicked.

## Flyout Menus

The repository includes two flyout menus: "Cities" and "Resources."

### Cities Flyout

The "Cities" flyout displays a list of cities with images. It is shown when the "Cities" button is clicked and can be closed by clicking outside of it.

### Resources Flyout

The "Resources" flyout displays links to various resources. It is shown when the "Resources" button is clicked and can be closed by clicking outside of it.

Each flyout menu is implemented using the `x-show` attribute to control its visibility based on the `openNav` variable.

To create a README file for the code snippet you provided, you can follow these guidelines:

---

# 3.Doctor Card Component

## Structure

The "Doctor Card" component consists of the following main sections:

1. **Doctor Image:** Displays an image of the doctor.

2. **Tab Navigation:** Allows users to switch between different tabs (Info, About, Highlights, Consult).

3. **Tab Content:** Each tab contains specific information about the doctor, such as qualifications, experience, and location.

4. **Interactive Elements:** Interactive elements, like buttons and icons, may trigger actions such as opening a modal for ratings or calling the doctor.

## Tabs and Content

- **Info Tab:** Displays basic information about the doctor, including name, qualifications, and medical registration status.

- **About Tab:** Provides a detailed description of the doctor's background, education, and training.

- **Highlights Tab:** Lists key highlights and achievements of the doctor, such as the number of IVF cases performed and professional affiliations.

- **Consult Tab:** Presents information about where and when users can consult with the doctor, including hospital names, locations, and hours of availability.


# 4.Footer Design Explanation

### Footer Part 1

- **Logo and Description**
- **Social Media Links**
### Footer Part 2

- **Resources**
- **Quick Links**
- **Subscribe Form**

### Footer Part 3

- **Contact Information**
- **Copyright and Links**

# 5.Tailwind CSS Configuration 

## Introduction

This readme provides an explanation of the Tailwind CSS configuration file included in this project.

### Configuration Details

- **content**: Specifies the files that Tailwind CSS should scan for classes. In this example, it scans the `index.html` file and all JavaScript files in the `flowbite` package located in `node_modules`.

- **theme**: Defines the theme settings for your Tailwind CSS project.

  - **extend**: Extends the default theme with custom configurations.

    - **screens**: Custom screen sizes are defined, including `xsm`, `xs`, and `ul`, with their respective breakpoints in pixels.

    - **boxShadow**: Adds a custom box shadow called `3xl` with specific shadow properties.

- **plugins**: Lists the plugins that are included in your project. In this example, two plugins are included:

  - `flowbite/plugin`: A plugin used for the carousel in the "About" tab.

  - `@tailwindcss/aspect-ratio`: A plugin used for creating aspect ratio containers for elements, such as cities flyout cards.



# 6.index.js

This code snippet provides functionality for displaying star ratings and handling modals for an application. It includes features for rendering star ratings based on numeric values and handling modals for displaying additional information.

## Star Ratings

The code includes a predefined set of ratings for documents in the `ratings` object. Each document is associated with a numeric rating. The `renderStarRating` function is used to generate star ratings based on these numeric ratings. The stars are displayed in an HTML element with a class specified by `ratingCard`. The code calculates the fill percentage for the stars based on the fractional part of the rating and assigns colors to the stars based on the rating value.

## About Content Overflow

The code also handles the display of "About" content by adding ellipses "..." when the content overflows its container. It checks if the content's height exceeds its container's height and, if so, truncates the content and reveals a "Read More" button to expand it.

## Modals

The code includes functionality for showing and hiding modals. Three types of modals are handled:

1. **Document Content Modal (`dc-modal`)**: This modal displays additional information about a document when triggered by clicking a "Read More" button associated with that document.

2. **Rating Info Modal (`ratingInfo-modal`)**: This modal displays information related to ratings when triggered.

3. **Top Content Info Modal (`info-modal`)**: This modal displays information about top content when triggered.

The modals can be shown and hidden based on user interactions. Additionally, the code allows users to close the modals by pressing the "Escape" key.

# 7. input.css and icons.css

## input.css 
  - includes all the custom css
## icons.css
 - Includes all the css for rendering icons from files present in webfonts.
 - This way we can have access to premium Font awesome icons for free.

# 8.Getting Webfonts Files for Font Awesome

This guide explains how to obtain webfonts files for Font Awesome, which you can use to enhance your web project with custom icons.

## Steps

1. Go to the Font Awesome website using the following link: [Font Awesome Search](https://fontawesome.com/search?q=user&o=r).

2. Open your browser's developer tools by right-clicking on the webpage and selecting "Inspect" or by pressing `Ctrl + Shift + I` or `Cmd + Option + I` on Mac.

3. In the developer tools, navigate to the "Sources" tab.

4. Look for a folder named `site-assets.fontawesome.com`. This folder contains various assets used by the Font Awesome website.

5. Within the `site-assets.fontawesome.com` folder, locate and click on the `webfonts` folder. This folder contains the webfonts files that you need for your project.

6. Inside the `webfonts` folder, you will find all the Font Awesome webfonts files.

## Steps to Use Webfont Files

1. **Define the Font Face**:

    Use the `@font-face` CSS rule to define the custom font family and specify the source URL of the webfont file. In your CSS file, you should have a rule like this:

    ```css
    @font-face {
        font-family: "solid";
        src: url(./webfonts/fa-solid-900.woff2) format("woff2");
    }
    ```

    - `font-family`: This specifies the name you will use to reference the custom font in your styles.

    - `src`: This provides the URL of the webfont file and specifies its format. In this case, we're using the WOFF2 format.

2. **Use the Custom Font icon**:

    Once you have defined the custom font, you can use it in your styles. In your CSS, you can apply the custom font to specific elements. For example:

    ```css
    .fa-car-right {
        font-family: "solid"; /* Use the custom font */
        font-style: normal;
        font-size: 13px;
        background-color: #999;
        padding: 2px 8px;
        border-radius: 50%;
        width: 25px;
        height: 25px;
    }
    ```

    In this code:
    
    - `.fa-car-right` is a class selector for the element where you want to apply the custom font icon.

    - `font-family: "solid";` specifies that the "solid" custom font should be used for this element.

    - Additional styles are applied to the element to define its appearance.

3. **Display the Custom Icon**:

    To display the custom icon, you can use the `::before` pseudo-element to insert content with the desired icon character. For example:

    ```css
    .fa-car-right::before {
        content: "\f0da"; /* Unicode character for the car icon */
        color: #fff; /* Icon color */
    }
    ```

    In this code:

    - `::before` is used to insert content before the element.

    - `content: "\f0da";` inserts the Unicode character for the car icon.

    - `color: #fff;` sets the color of the icon.

