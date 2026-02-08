import glob
import os

files = glob.glob('*.html')

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('href="index.php"', 'href="index.html"')
    new_content = new_content.replace('href="about.php"', 'href="about.html"')
    new_content = new_content.replace('href="services.php"', 'href="services.html"')
    new_content = new_content.replace('href="portfolio.php"', 'href="portfolio.html"')
    new_content = new_content.replace('href="contact.php"', 'href="contact.html"')
    
    if content != new_content:
        print(f"Updating {file_path}")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
    else:
        print(f"No changes in {file_path}")
