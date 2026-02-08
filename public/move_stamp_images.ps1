$source = "WhatsApp Image 2026-02-03 at 5.09.02 PM.jpeg"
$dest = "assets\stamp-ad-1.jpeg"
if (Test-Path $source) { Move-Item $source $dest }
