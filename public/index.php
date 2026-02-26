<?php
// Fallback: redirect root URL to index.html (for STRATO if .htaccess is ignored)
header('Location: index.html', true, 302);
exit;
