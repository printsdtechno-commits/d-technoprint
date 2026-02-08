$source = "Flyer.webp"
$dest = "assets\printing\printing-flyer-dtech.webp"
if (Test-Path $source) { Move-Item $source $dest }

$source = "ex.webp"
$dest = "assets\printing\printing-flyer-xpress.webp"
if (Test-Path $source) { Move-Item $source $dest }
