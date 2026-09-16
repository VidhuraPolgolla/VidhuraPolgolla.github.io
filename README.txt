VIDHURA POLGOLLA - PORTFOLIO WEBSITE
====================================

FILES
-----
index.html     The website. You only edit this for contact details.
projects.js    All your projects. Edit to add or change a project.
pages.js       The About page content.
videos.js      Videos for each project.
images/        All photos, CAD screenshots and diagrams.
               Includes logo.png, favicon.png, portrait.jpg
               and share-preview.jpg.
Vidhura_Polgolla_CV.pdf   The CV the download buttons open.

Upload ALL of these to your GitHub repository, keeping the
images folder as a folder.


ADD A PROJECT
-------------
1. Upload the photos into the images folder on GitHub.
2. Edit projects.js, copy an existing block from { to },
   paste it, change the text.
3. Commit changes.

The new project appears in the grid, and its category
automatically appears as a filter button.


CHANGE THE ABOUT PAGE
---------------------
Edit pages.js.
Blocks with chips appear in the right column.
Everything else appears in the left column.


UPDATE YOUR CV
--------------
Replace Vidhura_Polgolla_CV.pdf with your new CV, keeping
exactly the same file name. Both download buttons then point
at the new one.


CHANGE HOW THE LINK LOOKS WHEN SHARED
-------------------------------------
The picture and text that LinkedIn and WhatsApp show come
from images/share-preview.jpg and the og: lines near the top
of index.html.

If your web address ever changes, update the two lines in
index.html that contain vidhurapolgolla.github.io.

LinkedIn caches previews. After changing them, paste your
link into LinkedIn's Post Inspector to refresh it.


CHANGE YOUR PHOTO OR LOGO
-------------------------
Replace images/portrait.jpg with a new photo of the same
shape (taller than wide). Replace images/logo.png to change
the logo in the top bar. Keep the same file names.


CHANGE CONTACT DETAILS
----------------------
Open index.html and look for
    EDIT YOUR CONTACT DETAILS HERE
near the start of the script. Change the four lines there.


ADD A VIDEO
-----------
Edit videos.js and follow the instructions at the top.
Paste the whole YouTube link.


NOTES
-----
Fonts load from Google Fonts, so the site looks its best
online. Offline it falls back to a system font and still
works.

YouTube videos need internet. For an interview with no WiFi,
put an mp4 file next to index.html and write its file name in
videos.js instead of the link.

If the site goes blank after you edit a file, you have lost a
comma, quote mark or bracket. On GitHub open the file, click
History, and revert to the last working version.
