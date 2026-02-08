import re
import os

files = [
    r"f:\D-Technoprint\Dtechnoprint new\services.html",
    r"f:\D-Technoprint\Dtechnoprint new\services.php"
]

# Regex to find the button and add margin-top: 50px
# Current: <a class="btn btn-light btn-sm mt-3" href="..." ... style="color: var(--brand); font-weight: 600;">WhatsApp Us</a>
# Target: <a class="btn btn-light btn-sm" href="..." ... style="color: var(--brand); font-weight: 600; margin-top: 50px;">WhatsApp Us</a>

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace mt-3 with nothing (or keep it and override, but cleaner to remove)
    # And append margin-top: 50px to style
    
    # We'll use a specific replacement for the button we added
    pattern = r'(<a class="btn btn-light btn-sm) mt-3(" href="https://wa.me/971545741959"[^>]*style="[^"]*)(")'
    
    # Check if pattern exists
    if not re.search(pattern, content):
        print(f"Pattern not found in {file_path}")
        # Fallback if mt-3 is already gone or formatted differently
        # Try to find the style and append if not present
        pattern_style = r'(style="color: var\(--brand\); font-weight: 600;)(")'
        if re.search(pattern_style, content):
             content = re.sub(pattern_style, r'\1 margin-top: 50px;\2', content)
             # Also try to remove mt-3 if it exists nearby
             content = re.sub(r'class="btn btn-light btn-sm mt-3"', r'class="btn btn-light btn-sm"', content)
    else:
        # Replace: group 1 + "" + group 2 + "; margin-top: 50px;" + group 3
        content = re.sub(pattern, r'\1\2; margin-top: 50px;\3', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file_path}")
