<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>question 1</h3>
    <form action="/submit.php" method="post" autocomplete="on">
    <label for="name" placeholder="Enter your name">Name:</label>
    <input type="text" id="name" placeholder="Enter your name">
    <button type="submit">Submit</button>
    </form>

    <h3>question 2</h3>
    <form method="get" action="/search.php">
        
        <input type="search" name="query" placeholder="Enter search query">
        <button type="submit">Search</button>
        </form>
        <form action="/submit.php" method="post" enctype="application/x-www-form-urlencoded">
            <input type="file" name="file">
            <button type="submit">Upload</button>




        

        <!DOCTYPE html>
<html>
<head>
    <title>HTML Forms - All Questions</title>
</head>
<body>

<h1>HTML Forms - All Questions</h1>

<h2>Question 1</h2>
<form action="/submit.php" method="post" autocomplete="on">
    <input type="text" name="name">
    <button type="submit">Submit</button>
</form>






<h2>Question 2</h2>
<form action="/search.php" method="get">
    <input type="search" name="search">
    <button type="submit">Search</button>
</form>

<!-- Question 3 -->
<h2>Question 3</h2>
<form action="/submit.php" method="post" novalidate>
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <button type="submit">Submit</button>
</form>

<!-- Question 4 -->
<h2>Question 4</h2>
<form action="/submit.php" method="post"
      enctype="application/x-www-form-urlencoded">
    <!-- Default encoding for normal form data -->
    <input type="text" name="name">
    <input type="email" name="email">
    <button type="submit">Submit</button>
</form>

<!-- Question 5 -->
<h2>Question 5</h2>
<form action="/upload.php" method="post"
      enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>


<h2>Question 6</h2>
<form action="/submit.php" method="post" enctype="text/plain">
    <input type="text" name="name">
    <input type="text" name="city">
    <button type="submit">Submit</button>
</form>



<h2>Question 7</h2>
<form name="userForm" action="/submit.php" target="_blank">
    <input type="text" name="name">
    <button type="submit">Submit</button>
</form>


<h2>Question 8</h2>
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
</form>

</form>
<!-- Question 9 -->
<h2>Question 9</h2>
<form>
    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male" checked>
    <label for="male">Male</label>

    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
</form>

<form

<!-- Question 10 -->
<h2>Question 10</h2>
<form>
    <select id="fav" multiple size="3">
        <option value="hjdhh"> hjdhh</option>
         <option value="bmw">BMW</option>
        <option value="audi">Audi</option>
        <option value="toyota">Toyota</option>
    </select>
</form>

<form>
    <label>Hobbies:</label>
    <input type="checkbox" id="sports" name="hobby" value="sports" checked>
    <label for="sports">Sports</label>

    <input type="checkbox" id="music" name="hobby" value="music">
    <label for="music">Music</label>

    <input type="checkbox" id="reading" name="hobby" value="reading">
    <label for="reading">Reading</label>
</form>




<!-- Question 11 -->
<h2>Question 11</h2>
<form>
    <select name="cars">
        <option value="bmw">BMW</option>
        <option value="audi">Audi</option>
        <option value="toyota">Toyota</option>
    </select>
</form>

<!-- Question 12 -->
<h2>Question 12</h2>
<form>
    <select name="cars" multiple size="3">
        <option value="bmw">BMW</option>
        <option value="audi">Audi</option>
        <option value="toyota">Toyota</option>
        <option value="ford">Ford</option>
    </select>
</form>

<!-- Question 13 -->
<h2>Question 13</h2>






<form>
    <select name="fruit">
        <optgroup label="Citrus">
            <option value="orange">Orange</option>
            <option value="lemon">Lemon</option>
        </optgroup>
        <optgroup label="Tropical">
            <option value="mango">Mango</option>
            <option value="banana">Banana</option>
        </optgroup>
    </select>
</form>

<!-- Question 14 -->
<h2>Question 14</h2>

<form>
   
</form>

<form>
    <textarea name="comment" rows="4" cols="50"
              placeholder="Write your comments"></textarea>
</form>

<!-- Question 15 -->
<h2>Question 15</h2>



<form>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button">Click Me</button>
</form>

<!-- Question 16 -->
<h2>Question 16</h2>
<form>
    <fieldset>
        <legend>Personal Information</legend>
        <input type="text" name="name" placeholder="Name">
        <input type="email" name="email" placeholder="Email">
    </fieldset>
</form>

<!-- Question 17 -->
<h2>Question 17</h2>
<form>
    <fieldset disabled>
        <legend>Account</legend>
        <input type="text" name="username" value="Username">
        <input type="password" name="password" value="password">
    </fieldset>
</form>

<!-- Question 18 -->
<h2>Question 18</h2>



<form>
    <input list="browsers" name="browser">
    <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Edge">
    </datalist>
</form>

<!-- Question 19 -->
<h2>Question 19</h2>


<form>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"
           required minlength="8">
</form>

<!-- Question 20 -->
<h2>Question 20</h2>
<form>
    <input type="email" name="emails"
           multiple
           placeholder="email1@example.com, email2@example.com">
</form>

<!-- Question 21 -->
<h2>Question 21</h2>
<form>
    <input type="date" name="date"
           min="2023-01-01" max="2023-12-31">
</form>

<!-- Question 22 -->
<h2>Question 22</h2>
<form>
    <input type="number" name="quantity"
           min="1" max="10" step="1">
</form>

<!-- Question 23 -->
<h2>Question 23</h2>
<form>
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume"
           min="0" max="100" value="50">
</form>

<!-- Question 24 -->
<h2>Question 24</h2>
<form action="/upload.php" method="post"
      enctype="multipart/form-data">
    <input type="file" name="document"
           accept=".pdf,.docx" required>
    <button type="submit">Upload</button>
</form>

<!-- Question 25 -->
<h2>Question 25</h2>
<form>
    <input type="hidden" name="session_token" value="ABC123">
    <button type="submit">Submit</button>
</form>

<!-- Question 26 -->
<h2>Question 26</h2>
<form>
    <label for="color">Favorite Color:</label>
    <input type="color" id="color" name="color" value="#ff0000">
</form>

<!-- Question 27 -->
<h2>Question 27</h2>
<form>
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone"
           pattern="[0-9]{10}"
           placeholder="Enter 10 digit number">
</form>

<!-- Question 28 -->
<h2>Question 28</h2>
<form>
    <label for="website">Website:</label>
    <input type="url" id="website" name="website"
           required placeholder="https://example.com">
</form>

<!-- Question 29 -->
<h2>Question 29</h2>
<form>
    <input type="search" name="search"
           autofocus placeholder="Search here">
</form>

<!-- Question 30 -->
<h2>Question 30</h2>
<form id="myForm">
    <button type="submit">Submit</button>
</form>

<input type="text" name="outsideInput"
       form="myForm" placeholder="Outside Form">

<!-- Question 31 -->
<h2>Question 31</h2>
<form action="/default.php" method="post">
    <input type="text" name="name">
    <button type="submit">Default Action</button>
    <button type="submit" formaction="/other.php">Other Action</button>
</form>

<!-- Question 32 -->
<h2>Question 32</h2>
<form action="/submit.php" method="post">
    <input type="text" name="name">
    <button type="submit">POST</button>
    <button type="submit" formmethod="get">GET</button>
</form>

<!-- Question 33 -->
<h2>Question 33</h2>
<form action="/register.php" method="post">
    <input type="text" name="name" required placeholder="Name">
    <input type="email" name="email" required placeholder="Email">
    <button type="submit">Register</button>
    <button type="submit" formnovalidate>Save as Draft</button>
</form>

<!-- Question 34 -->
<h2>Question 34</h2>
<form action="/submit.php" method="post">
    <input type="text" name="name">
    <button type="submit">Submit</button>
    <button type="submit" formtarget="_blank">Preview in New Tab</button>
</form>

<!-- Question 35 -->
<h2>Question 35 -->
<form action="/login.php" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="loginPassword">Password:</label>
    <input type="password" id="loginPassword"
           name="password" required minlength="8">

    <button type="submit">Login</button>
</form>

<!-- Question 36 -->
<h2>Question 36</h2>
<form action="/register.php" method="post">

    <fieldset>
        <legend>Personal Information</legend>

        <label for="name36">Name:</label>
        <input type="text" id="name36" name="name" required>

        <label for="email36">Email:</label>
        <input type="email" id="email36" name="email" required>
    </fieldset>

    <fieldset>
        <legend>Preferences</legend>

        <input type="checkbox" id="newsletter" name="newsletter">
        <label for="newsletter">Subscribe to Newsletter</label>
    </fieldset>

    <button type="submit">Register</button>
</form>

<!-- Question 37 -->
<h2>Question 37</h2>
<form action="/contact.php" method="post">

    <label for="name37">Name:</label>
    <input type="text" id="name37" name="name" required>

    <label for="email37">Email:</label>
    <input type="email" id="email37" name="email" required>

    <label for="message37">Message:</label>
    <textarea id="message37" name="message"
              rows="5" cols="40" required></textarea>

    <button type="submit">Send Message</button>
</form>

<!-- Question 38 -->
<h2>Question 38</h2>
<form action="/feedback.php" method="post">

    <label for="satisfaction">Satisfaction (1-10):</label>
    <input type="range" id="satisfaction"
           name="satisfaction" min="1" max="10" value="5">

    <p>Would you recommend us?</p>

    <input type="radio" id="yes" name="recommend" value="yes">
    <label for="yes">Yes</label>

    <input type="radio" id="no" name="recommend" value="no">
    <label for="no">No</label>

    <br><br>

    <textarea name="comments"
              rows="4" cols="40"
              placeholder="Your comments"></textarea>

    <br>
    <button type="submit">Submit Feedback</button>
</form>

<!-- Question 39 -->
<h2>Question 39</h2>
<form action="/upload.php" method="post"
      enctype="multipart/form-data">

    <label for="resume">Resume:</label>
    <input type="file" id="resume" name="resume"
           accept=".pdf,.docx" required>

    <label for="photo">Profile Photo:</label>
    <input type="file" id="photo" name="photo"
           accept="image/*">

    <button type="submit">Upload</button>
</form>

<!-- Question 40 -->
<h2>Question 40</h2>
<form action="/search.php" method="get">

    <input type="search" name="q"
           autofocus
           placeholder="Search website">

    <button type="submit">Search</button>
</form>

<!-- Question 41 -->
<h2>Question 41</h2>
<form action="/apply.php" method="post"
      enctype="multipart/form-data">

    <fieldset>
        <legend>Personal Details</legend>

        <label for="name41">Name:</label>
        <input type="text" id="name41" name="name" required>

        <label for="email41">Email:</label>
        <input type="email" id="email41" name="email" required>

        <label for="phone41">Phone:</label>
        <input type="tel" id="phone41" name="phone" required>
    </fieldset>

    <fieldset>
        <legend>Experience</legend>

        <textarea name="experience"
                  rows="5" cols="40"
                  placeholder="Describe your experience"></textarea>
    </fieldset>

    <label for="resume41">Resume:</label>
    <input type="file" id="resume41" name="resume"
           accept=".pdf" required>

    <p>Employment Type:</p>

    <input type="radio" id="fulltime" name="employment"
           value="full-time">
    <label for="fulltime">Full Time</label>

    <input type="radio" id="parttime" name="employment"
           value="part-time">
    <label for="parttime">Part Time</label>

    <br><br>

    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">I agree to the terms and conditions</label>

    <br><br>

    <button type="submit">Apply</button>
    <button type="submit" formnovalidate>Save Draft</button>
</form>

<!-- Question 42 -->
<h2>Question 42</h2>
<form action="/default.php"
      method="post"
      target="_self">

    <input type="text" name="name" required placeholder="Name">
    <input type="email" name="email" required placeholder="Email">

    <br><br>

    <!-- Default settings -->
    <button type="submit">Default</button>

    <!-- Override action -->
    <button type="submit"
            formaction="/other.php">
        Different Action
    </button>

    <!-- Override method -->
    <button type="submit"
            formmethod="get">
        GET Method
    </button>

    <!-- Skip validation -->
    <button type="submit"
            formnovalidate>
        No Validation
    </button>

    <!-- Open in new tab -->
    <button type="submit"
            formtarget="_blank">
        New Tab
    </button>
</form>

</body>
</html>
</body>
</html>
