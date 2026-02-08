$source = "Ab.webp"
$dest = "assets\printing\printing-ababeel.webp"
if (Test-Path $source) { Move-Item $source $dest }

$source = "Ad.webp"
$dest = "assets\printing\printing-adroit.webp"
if (Test-Path $source) { Move-Item $source $dest }

$source = "Chefteck.webp"
$dest = "assets\printing\printing-chefteck.webp"
if (Test-Path $source) { Move-Item $source $dest }

$source = "mb1.webp"
$dest = "assets\printing\printing-membership-1.webp"
if (Test-Path $source) { Move-Item $source $dest }

$source = "mb2.webp"
$dest = "assets\printing\printing-membership-2.webp"
if (Test-Path $source) { Move-Item $source $dest }
