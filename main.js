import './style.css'

// Global flag to skip animations
let skipToEnd = false

// Helper function: wait/delay
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Helper function: type text character by character
async function typeText(container, text, speed = 50) {
  for (let i = 0; i < text.length; i++) {
    container.innerHTML += text.charAt(i)
    await wait(speed)
  }
}

// Helper function: show text instantly
function showInstant(container, text) {
  container.innerHTML += text
}

// Helper function: clear screen
function clearScreen(container) {
  container.innerHTML = ''
}

// Helper function: create cursor element
function createCursor(colorClass = 'cursor-white') {
  const cursor = document.createElement('span')
  cursor.className = `cursor ${colorClass}`
  cursor.textContent = '_'
  return cursor
}

// Helper function: generate corrupted error code
function generateCorruptedErrorCode() {
  const lines = []
  const corruptChars = '█▓▒░╬╣╠╦╩╔╗╚╝║═¤◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!@#$%^&*()_+-=[]{}|;:,.<>?/~`'
  const hexChars = '0123456789ABCDEF'
  const terms = ['RIFT-STRIDER', 'ABYSS-ENGINE', 'CELESTIAL-EXARCHS', 'OMEGA-FALL', 'WINGS-OF-FLAME',
                 'TITAN-CLASS', 'PULSEFORGED', 'EXARCH-PROTOCOL', 'SKYFALL', 'HEAVEN-FALLS',
                 'RUST-DUST-MEMORY', 'AETHER-CONDUIT', 'IRON-FORGED']

  // Line 1-2: ERROR CODE header
  lines.push('ERROR CODE: CRITICAL SYSTEM FAILURE')
  lines.push('═'.repeat(80))

  // Lines 3-8: Memory addresses with corruption
  for (let i = 0; i < 6; i++) {
    let line = `0x${Array(8).fill(0).map(() => hexChars[Math.floor(Math.random() * 16)]).join('')}: `
    // Add corrupted hex values
    for (let j = 0; j < 12; j++) {
      if (Math.random() < 0.3) {
        line += corruptChars[Math.floor(Math.random() * corruptChars.length)]
      } else {
        line += hexChars[Math.floor(Math.random() * 16)]
      }
      if (j % 2 === 1) line += ' '
    }
    lines.push(line)
  }

  // Lines 9-10: Separator
  lines.push('─'.repeat(80))
  lines.push('[CORRUPTION DETECTED IN CORE MODULES]')

  // Lines 11-18: Corrupted module names
  for (let i = 0; i < 8; i++) {
    const term = terms[Math.floor(Math.random() * terms.length)]
    let line = `[${term}] `

    // Add corruption
    const corruptionLevel = Math.random()
    for (let j = 0; j < 40; j++) {
      if (Math.random() < corruptionLevel) {
        line += corruptChars[Math.floor(Math.random() * corruptChars.length)]
      } else {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
        line += chars[Math.floor(Math.random() * chars.length)]
      }
    }
    lines.push(line)
  }

  // Lines 19-20: More corruption
  lines.push('─'.repeat(80))
  lines.push('[STACK TRACE CORRUPTED]')

  // Lines 21-28: Stack trace corruption
  for (let i = 0; i < 8; i++) {
    let line = `#${i} `
    line += `0x${Array(16).fill(0).map(() => hexChars[Math.floor(Math.random() * 16)]).join('')} `

    // Add corrupted symbols
    for (let j = 0; j < 30; j++) {
      if (Math.random() < 0.4) {
        line += corruptChars[Math.floor(Math.random() * corruptChars.length)]
      } else {
        line += String.fromCharCode(33 + Math.floor(Math.random() * 94))
      }
    }
    lines.push(line)
  }

  // Lines 29-30: Final corruption
  lines.push('═'.repeat(80))
  let finalLine = ''
  for (let i = 0; i < 80; i++) {
    finalLine += corruptChars[Math.floor(Math.random() * corruptChars.length)]
  }
  lines.push(finalLine)

  // Add more full-width corruption lines
  for (let i = 0; i < 5; i++) {
    let line = ''
    for (let j = 0; j < 80; j++) {
      line += corruptChars[Math.floor(Math.random() * corruptChars.length)]
    }
    lines.push(line)
  }

  return lines.join('\n')
}

// Function to render final state (skipping all animations)
async function renderFinalState() {
  const terminal = document.getElementById('terminalContent')
  clearScreen(terminal)

  // Render lore text instantly
  const loreDiv = document.createElement('div')
  terminal.appendChild(loreDiv)

  const loreText = `Iron Idols is mythology in motion where faith meets circuitry, and war becomes transcendence.

Deep beneath the ruins of a dead world, a hundred meters below the surface, the last survivors still breathe.
They live among rust, dust, and memory haunted by the endless war that rages above.
Steel groans. The earth trembles. Every echo from the surface is a hymn of hate, love, and pain.

Down here, they forged sound from despair turning screams into rhythm, loss into pulse, and faith into fire.
Each track is a fragment of their confession, each note a prayer to forgotten gods of metal and light.

When the world above burns, Iron Idols rise from the depths not to save, but to eclipse the endless cries of a dying war.
This is not music. This is survival.`

  loreDiv.textContent = loreText

  // Render contact section instantly
  const contactSection = document.createElement('div')
  contactSection.className = 'contact-section'
  terminal.appendChild(contactSection)

  // Create text container (left side)
  const contactTextDiv = document.createElement('div')
  contactTextDiv.className = 'contact-text'
  contactSection.appendChild(contactTextDiv)

  // Create initial logo for progressive loading
  const logoImg = document.createElement('img')
  logoImg.src = '/Images/1.jpg'
  logoImg.alt = 'Iron Idols'
  logoImg.className = 'iron-idols-logo'
  contactSection.appendChild(logoImg)

  // Replace with slider after 3 seconds
  setTimeout(() => {
    logoImg.remove()

    const sliderContainer = document.createElement('div')
    sliderContainer.className = 'image-slider'

    const sliderImages = document.createElement('div')
    sliderImages.className = 'slider-images'

    const imageFiles = ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg']
    imageFiles.forEach((src, index) => {
      const img = document.createElement('img')
      img.src = src
      img.alt = 'Iron Idols'
      img.className = 'slider-image'
      // Stretch image 3
      if (index === 2) {
        img.style.objectFit = 'fill'
      }
      sliderImages.appendChild(img)
    })

    sliderContainer.appendChild(sliderImages)
    contactSection.appendChild(sliderContainer)

    let currentIndex = 0
    setInterval(() => {
      currentIndex = (currentIndex + 1) % imageFiles.length
      sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`
    }, 5000)
  }, 3000)

  // Add contact text
  const contactTextBefore = `

Contact:
Maximilian H. Stelzl · Iron Idols
`
  contactTextDiv.textContent = contactTextBefore

  // Add clickable email
  const emailLink = document.createElement('a')
  emailLink.href = 'mailto:alive@ironidols.com'
  emailLink.textContent = 'alive@ironidols.com'
  contactTextDiv.appendChild(emailLink)

  // Add line break and Press Release link
  contactTextDiv.appendChild(document.createTextNode('\n'))

  const pressReleaseLink = document.createElement('a')
  pressReleaseLink.href = '/Iron_Idols_TESTAMENT_PressRelease.pdf'
  pressReleaseLink.target = '_blank'
  pressReleaseLink.rel = 'noopener noreferrer'
  pressReleaseLink.textContent = 'Press Release'
  contactTextDiv.appendChild(pressReleaseLink)

  // Add spacing before social links
  contactTextDiv.appendChild(document.createTextNode('\n\n'))

  // Create social media links
  const spotifyLink = document.createElement('a')
  spotifyLink.href = 'https://open.spotify.com/intl-de/artist/4VZiUzDKU1sbOPag8TbwZc'
  spotifyLink.target = '_blank'
  spotifyLink.rel = 'noopener noreferrer'
  spotifyLink.textContent = 'Spotify'
  contactTextDiv.appendChild(spotifyLink)

  contactTextDiv.appendChild(document.createTextNode(' | '))

  const instagramLink = document.createElement('a')
  instagramLink.href = 'https://www.instagram.com/iron.idols/'
  instagramLink.target = '_blank'
  instagramLink.rel = 'noopener noreferrer'
  instagramLink.textContent = 'Instagram'
  contactTextDiv.appendChild(instagramLink)

  contactTextDiv.appendChild(document.createTextNode(' | '))

  const youtubeLink = document.createElement('a')
  youtubeLink.href = 'https://www.youtube.com/channel/UC4r7a8AAA9ApFhhAXdt9Pqw'
  youtubeLink.target = '_blank'
  youtubeLink.rel = 'noopener noreferrer'
  youtubeLink.textContent = 'YouTube'
  contactTextDiv.appendChild(youtubeLink)

  // Final blinking cursor
  terminal.appendChild(document.createTextNode('\n\n'))
  const finalCursor = createCursor('cursor-white')
  terminal.appendChild(finalCursor)

  // Wait 5 minutes for hidden message
  await wait(300000)

  finalCursor.remove()

  const hiddenMessageDiv = document.createElement('div')
  hiddenMessageDiv.className = 'hidden-message'
  hiddenMessageDiv.textContent = 'eternal… steel… blessing… tower…'
  terminal.appendChild(hiddenMessageDiv)
}

// Main sequence
async function runSequence() {
  const terminal = document.getElementById('terminalContent')

  // Create fast-forward button
  const ffButton = document.createElement('button')
  ffButton.className = 'fast-forward-btn'
  ffButton.textContent = '>> SKIP'
  ffButton.onclick = () => {
    skipToEnd = true
    ffButton.remove()
    renderFinalState()
  }
  document.body.appendChild(ffButton)

  // Step 1: Empty terminal with blinking cursor (3 seconds)
  const cursor1 = createCursor('cursor-white')
  terminal.appendChild(cursor1)
  await wait(3000)

  if (skipToEnd) return

  // Step 2: System initiated (typed, 2 seconds total)
  clearScreen(terminal)
  const systemDiv = document.createElement('div')
  terminal.appendChild(systemDiv)
  await typeText(systemDiv, 'System initiated', 80)
  await wait(1000)

  if (skipToEnd) return

  // Step 3: Extended boot sequence with scrolling (6 seconds, ~100 lines)
  clearScreen(terminal)

  const bootContainer = document.createElement('div')
  bootContainer.style.maxHeight = '100vh'
  bootContainer.style.overflow = 'hidden'
  bootContainer.style.position = 'relative'
  terminal.appendChild(bootContainer)

  const bootMessages = [
    // BIOS/Early Boot (Lines 1-20)
    'BIOS v4.7.2 - Iron Systems Corporation',
    'CPU: Titan-Core X9 @ 4.2GHz [OK]',
    'RAM: 64GB DDR5-6400 [OK]',
    'Initializing PCI devices...',
    '[OK] Graphics Controller detected',
    '[OK] Network Interface Card: Link UP',
    '[OK] Storage Controller: 8 drives found',
    'Loading boot sector from /dev/sda1...',
    'GRUB Loading stage 1.5',
    'GRUB Loading stage 2',
    '',
    '// IRON OS KERNEL v7.4.1 - CELESTIAL BUILD',
    'Decompressing kernel image... [OK]',
    'Kernel command line: root=/dev/sda1 quiet splash',
    'Calibrating delay loop... 8.32 BogoMIPS',
    'Memory: 65536000k/67108864k available',
    'Initializing CPU#0',
    'Initializing CPU#1',
    'Checking for processor bugs...',
    'CPU: Enabling cache...',
    '',
    // Core System Init (Lines 21-40)
    '[BOOT] Initializing celestial-core drivers...',
    '[OK] Titan-class actuators online.',
    '[LOAD] PCI: Bus scan complete',
    '[OK] USB: 8 ports detected',
    '[SCAN] SCSI: Scanning for devices...',
    '[OK] SCSI: 4 devices found',
    '[LOAD] Mounting root filesystem...',
    '[OK] Root filesystem mounted read-only',
    '[WARN] Exarch-protocol checksum unstable.',
    '[LOAD] Rift-Strider navigation kernel v7.4',
    '[OK] Module rift_strider loaded successfully',
    '[FAIL] Pulseforged Guardian registry mismatch.',
    '[WARN] Retrying guardian authentication...',
    '[OK] Guardian authentication successful',
    '[BOOT] Binding memory sectors: rust_dust_memory.vx',
    '[OK] Memory binding complete: 32 sectors',
    '[LOAD] Loading sound drivers...',
    '[OK] ALSA driver v1.2.8 loaded',
    '[OK] PulseAudio daemon started',
    '[SCAN] Network interfaces...',
    '',
    // Advanced Services (Lines 41-60)
    '[OK] eth0: Link detected - 1000Mbps',
    '[LOAD] Starting system services...',
    '[OK] systemd-journald started',
    '[OK] systemd-udevd started',
    '[SCAN] Aether conduit: corrupted',
    '[WARN] Attempting aether conduit repair...',
    '[FAIL] Aether conduit repair failed',
    '[OK] Skyfall resonance chamber: operational',
    '[LOAD] Omega-Fall contingency protocols loaded',
    '[OK] Protocol version: 4.7.1-omega',
    '[WARN] Celestial Exarchs authentication pending...',
    '[LOAD] Loading exarch certificates...',
    '[OK] Certificate chain verified',
    '[OK] Exarch authentication complete',
    '[BOOT] Wings of Flame ignition sequence: standby',
    '[LOAD] Thermal management system online',
    '[OK] Wing servos: operational',
    '[OK] Flame injectors: armed',
    '[OK] Iron-Forged sentinels deployed',
    '[SCAN] Heaven Falls trajectory: locked',
    '',
    // Critical Systems (Lines 61-70)
    '[LOAD] Abyss Engine thermal regulation...',
    '[WARN] Temperature: 87°C - approaching limit',
    '[FAIL] Abyss Engine thermal regulation critical',
    '[WARN] Initiating emergency cooling...',
    '[OK] Emergency cooling active',
    '[LOAD] Starting graphics subsystem...',
    '[OK] DRM driver loaded',
    '[OK] Framebuffer console ready',
    '[LOAD] Loading core systems...',
    '[OK] Rust-dust memory integrity: 98.7%',
    '',
    '[LOAD] Final system initialization...',
    '[OK] System ready',
    '[OK] All systems nominal',
    '[BOOT] Launching primary interface...',
    '[OK] Interface loaded successfully'
  ]

  const skullArt = [
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+-.........-*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@*:..:+%@@@@@@@@@@@%+...:*@@@@@@@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@@@%...#@@@@@@@@@@@@@@@@@@@@@@@@-..=@@@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@:.-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*..%@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@*..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:.+@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:.#@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@-.#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%..@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@.:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-.@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@.:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.%@@@@@@@@@@@',
    '@@@@@@@@@@@@@::@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.%@@@@@@@@@@',
    '@@@@@@@@@@@@%.@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@::@@@@@@@@@@',
    '@@@@@@@@@@@@:-@@@@:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.@@@@@@@@@@',
    '@@@@@@@@@@@@.%@@@+.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.@@@@.-@@@@@@@@@',
    '@@@@@@@@@@@+.@@@@-=%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.@@@@-.@@@@@@@@@',
    '@@@@@@@@@@@:.@@@@@+:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-.@@@@*.@@@@@@@@@',
    '@@@@@@@@@@@.:@@@@@.=@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:@@@@@#:%@@@@@@@@',
    '@@@@@@@@@@@.-@@@@@:=%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=##@@@@%:%@@@@@@@@',
    '@@@@@@@@@@@.-@@@@.::@@@@@@@@@@@@@@@@@@@+@@#@@@@@@@@@@@@@@@@@@:%+@@@@%:%@@@@@@@@',
    '@@@@@@@@@@@-.@@@+.%@@@@@@%=....:*@@@@@@-@@*@@@@@#-:::+%@@@@@@*-%@@@@*.@@@@@@@@@',
    '@@@@@@@@@@@%.@@@.@@@@=..=%@@@@%:...:@#.@@@-@@=....-#%@+..-@@@@:.@@@@-.@@@@@@@@@',
    '@@@@@@@@@@@@.*@@:@@..=@@@@@@@@@@@+.@@@@@@@@@@@.=@@@@@@@@@@..-@@-%@@@.%@@@@@@@@@',
    '@@@@@@@@@@@@*.@@:@@:-@@@@@@@@@@@@@*..@@@@@@@..%@@@@@@@@@@@@+.#@:*@@.:@@@@@@@@@@',
    '@@@@@@@@@@@@@:-@-@@#.@@@@@@@@@@@@@-.-@@@@@@@:.@@@@@@@@@@@@@#:@@.%@+.@@@@@@@@@@@',
    '@@@@@@@@@@@@%..=-%@@.+@@@@@@@@@@#:.-@@@:.-@@+.:@@@@@@@@@@@@::@@.@@.*@@@@@@@@@@@',
    '@@@@@@@@@@@@@.#..@@@#..-##+:..:#@@*@@@.#@::@@@@#=..:#@@@@%..@@@.+...*@@@@@@@@@@',
    '@@@@@@@@@@@@@.@@@@@@@@@#+=#@@@@@@@@@@.*@@@.+@@@@@@@@#:....+@@@@..-@.@@@@@@@@@@@',
    '@@@@@@@@@@@@@-.@@@@@@@@@@@@+:.=@@@@@:-@@%@%.@@@@@=.+@@@@@@@@@@@@=-=*@@@@@@@@@@@',
    '@@@@@@@@@@@@@@.:@@@@@@@@@@@@@@@@@@@*.@@%:@@:=@@@@@@@@%@@@@@@@@@@..:@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@...-=+*++=+**@@@@@@@.+@@:.%@@.@@@@@@@@@@@@@@@@@@.=@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@.-.=%.*.=#@@@@@*.%@#.--@@.-@@@@@-%#.........*@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@#.@@@.@@.@@@@@@@*...*%...-@@@@@@+:.@-:@%.@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@.%@@:**:@@@@@@@@@@@@@@@@@@@@@@@@.*@.@@.+@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@:=@@-:.=%@@@@@@@@@@@*@@@@@@@@@@%.-.-@%:#@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@=.@@#.%.:.:#@.@@=@@..@#@#@@=@...:%.%@+:*@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@#.@@@...%:@.@:-#.#.-%.=#:+.+.+:*.:.@@-.%@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@.@@@=-:..:=@=*@:@*#@.@@.@-%=...::%@@..@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@.%@@@%#.#--=....... ......=:=*.#%@@@..@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@:#@@@@@#@#...+%.@*-%.%#-#:-:.#@@@@@@..@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@:+@@@@@@@@*@.@*=%:=@:-%:%**@=@@@@@@@.-@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@:..*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-..*@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@*.#@=..@@@@@@@@@@@@@@@@@@@@@@@@=..=@:-@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@=.%.@@@@@:.%@@@@@@@@@@@@@@@@@@@-.%@@@@*.:+@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@%:.:@@=*@@@@@@#.-@@@@@@@@:@@@@@@@@.:=@@@@@@.#%.:@@@@@@@@@@@@@@@@',
    '@@@@@@@@@%=...+@@@@@@+@@@@@@@@@-.-%@@@@@.@@@@@@*.=@@@@@@@@@-@@@=..%@@@@@@@@@@@@',
    '@#=:..:-*%@@@@@@@@@@@@@@@@@@@@@%@%%#***#*****+*#@@@@@@@@@@@@@@@@@@%-.-%@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:%@@@@@@@@@@@@@=%@@@@@@@@@@@@@@@@@@@@@#-.:+@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.@@@@@@@@@@@@--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=%',
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:@@@@@@@@@@+*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@+++++**::%@@@+@@@@@@@@+@@@%:.-:.:+#@@@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:@@@@@@@@@@@@@@:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
  ]

  // Display lines rapidly with auto-scroll (~127 lines in 6 seconds = ~47ms per line)
  for (const msg of bootMessages) {
    const line = document.createElement('div')
    line.textContent = msg
    line.style.whiteSpace = 'pre'
    bootContainer.appendChild(line)

    // Auto-scroll to bottom
    bootContainer.scrollTop = bootContainer.scrollHeight

    await wait(47) // ~47ms per line = ~6 seconds total
  }

  if (skipToEnd) return

  // Step 4: Add empty line before ERROR
  const emptyBeforeError = document.createElement('div')
  emptyBeforeError.innerHTML = '&nbsp;'
  bootContainer.appendChild(emptyBeforeError)
  bootContainer.scrollTop = bootContainer.scrollHeight
  await wait(47)

  // Add ERROR line (without cursor yet)
  const errorLine1 = document.createElement('div')
  errorLine1.className = 'error-text'
  errorLine1.textContent = 'ERROR'
  bootContainer.appendChild(errorLine1)

  // Immediately start removing lines from top to scroll ERROR to top
  // Keep removing until ERROR is at the top (only empty line and ERROR remain)
  while (bootContainer.children.length > 2) {
    if (skipToEnd) return
    bootContainer.removeChild(bootContainer.firstChild)
    await wait(30)
  }

  // ERROR is now at top - add red blinking cursor
  const errorCursor1 = document.createElement('span')
  errorCursor1.className = 'cursor cursor-red'
  errorCursor1.textContent = '_'
  errorLine1.appendChild(errorCursor1)

  // Wait 3 seconds with cursor blinking
  await wait(3000)

  // Remove cursor
  errorCursor1.remove()

  if (skipToEnd) return

  // Add System corrupted directly below ERROR with red blinking cursor
  const errorLine2 = document.createElement('div')
  errorLine2.className = 'error-text'
  errorLine2.textContent = 'System corrupted'
  bootContainer.appendChild(errorLine2)

  // Add red blinking cursor after System corrupted
  const errorCursor2 = document.createElement('span')
  errorCursor2.className = 'cursor cursor-red'
  errorCursor2.textContent = '_'
  errorLine2.appendChild(errorCursor2)

  await wait(2000)

  // Remove cursor
  errorCursor2.remove()

  if (skipToEnd) return

  // Type "rebooting" with dots appearing slowly
  const errorLine3 = document.createElement('div')
  errorLine3.className = 'error-text'
  bootContainer.appendChild(errorLine3)

  const rebootText = 'rebooting'
  const dots = '...............'

  // Type "rebooting" quickly
  for (const char of rebootText) {
    if (skipToEnd) return
    errorLine3.textContent += char
    await wait(50)
  }

  // Type dots slowly
  for (const dot of dots) {
    if (skipToEnd) return
    errorLine3.textContent += dot
    await wait(200)
  }

  if (skipToEnd) return

  // Step 5: Display corrupted error code immediately after dots (in red)
  const corruptedCode = generateCorruptedErrorCode()
  const corruptedLines = corruptedCode.split('\n')

  for (const corruptLine of corruptedLines) {
    const line = document.createElement('div')
    line.className = 'error-text'
    line.textContent = corruptLine
    line.style.whiteSpace = 'pre'
    bootContainer.appendChild(line)
    bootContainer.scrollTop = bootContainer.scrollHeight
    await wait(20) // Fast display
  }

  await wait(1000)

  if (skipToEnd) return

  // Step 6: Display Skull ASCII (in red, same color as error)
  for (const skullLine of skullArt) {
    const line = document.createElement('div')
    line.className = 'error-text' // Red like error code
    line.textContent = skullLine
    line.style.whiteSpace = 'pre'
    bootContainer.appendChild(line)
    bootContainer.scrollTop = bootContainer.scrollHeight
    await wait(30) // Fast display
  }

  await wait(1000)

  if (skipToEnd) return

  // Step 6: Rune takeover (typed)
  clearScreen(terminal)

  // Create container for runes with materializing transition
  const runeContainer = document.createElement('div')
  runeContainer.className = 'rune-text rune-enter'
  terminal.appendChild(runeContainer)

  // Multi-line runic text with first character in dark red
  const runeLines = [
    'ᛁ ᚠᛁᚾᚨᛚ ᛋᛈᚨᚱᚲ — ᛏᚺᛖ ᛏᚺᚱᛖᚨᛏ ᛏᚺᚨᛏ ᚹᚨᚱᚾᛖᛞ ᛏᚺᛖ ᚹᛟᚱᛚᛞ',
    'ᛉ ᛏᚺᚱᛟᚢᚷᚺ ᚱᚢᛋᛏ ᚨᚾᛞ ᚠᛁᚱᛖ — ᛏᚺᛖ ᛞᛖᚨᛞ ᚨᚱᛖ ᚾᛟᛏ ᛞᛖᚨᛞ',
    'ᚦ ᛏᚺᛖ ᚲᛟᚱᛖᚹᚨᛚᚲᛖᚱᛋ ᛗᚨᚱᚲᚺ — ᛁᚱᛟᚾ ᚠᛟᛟᛏᛋᛏᛖᛈᛋ ᚹᛁᛏᚺᛟᚢᛏ ᛞᚨᚹᚾ',
    'ᚨ ᛏᚺᛖ ᚺᚢᚾᚷᛖᚱ ᚲᛟᚾᛋᚢᛗᛖᛞ — ᚹᚨᚱᛋ ᛏᚺᚨᛏ ᚹᛖᚱᛖ ᚾᛟᛏ ᚹᛁᚾ',
    'ᚱ ᛟᚾᛖ ᛈᚢᛚᛋᛖ ᚺᛟᛚᛞᛋ ᛏᚺᛖ ᛞᚨᚱᚲ — ᚹᚺᛁᛚᛖ ᛏᚺᛖ ᚹᛟᚱᛚᛞ ᛒᚱᛖᚨᛏᚺᛖᛞ',
    'ᛇ ᚦᛖ ᚨᛒᛃᛁᛋᛋ ᛖᚾᚷᛁᚾᛖ ᚹᚺᛁᛋᛈᛖᚱᛋ — ᚾᚨᛗᛖᛋ ᛖᚱᚨᛋᛖᛞ, ᚹᛟᚱᛚᛞᛋ ᛗᛟᚱᛈᚺᛖᛞ',
    'ᛗ ᚦᛖ ᚱᛁᚠᛏ ᛋᛏᚱᛁᛞᛖᚱ ᚲᚢᛏᛋ ᛏᚺᛖ ᚹᛟᚱᛚᛞ — ᛟᚾᛚᚣ ᚦᛖ ᛋᚲᚱᛖᚨᛗ ᚱᛖᛗᚨᛁᚾᛋ',
    'ᛞ ᚱᚨᛞᛁᚨᚾᚲᛖ ᚢᚾᛒᚱᛟᚲᛖᚾ — ᚺᛟᛚᚤ ᚠᛁᚱᛖ, ᛋᚨᛚᚢᚨᛏᛁᛟᚾ, ᛒᚢᚱᚾ',
    'ᛟ ᛁᛞᛟᛚᛋ ᛟᚠ ᛋᛏᛖᛖᛚ — ᛒᛚᛟᛟᛞ ᚠᛟᚱ ᚠᚨᛚᛋᛖ ᚷᛟᛞᛋ',
    'ᛤ ᚲᛖᛚᛖᛋᛏᛁᚨᛚ ᛖᛉᚨᚱᚲᛋ — ᚹᛁᚾᚷᛋ ᛟᚠ ᚠᛚᚨᛗᛖ — ᚺᛖᚨᚢᛖᚾ ᚠᚨᛚᛚᛋ',
    'ᛥ ᛖᛏᛖᚱᚾᚨᛚ ᛟᛗᛖᚷᚨ — ᛏᚺᛖ ᚠᛁᚾᚨᛚ ᚷᛟᛞ ᚨᚾᛞ ᛏᚺᛖ ᛖᚾᛞ'
  ]

  // Type each line with first character in dark red
  for (const line of runeLines) {
    const lineDiv = document.createElement('div')
    const firstChar = line.charAt(0)
    const restOfLine = line.substring(1)

    lineDiv.innerHTML = `<span style="color: #8b0000;">${firstChar}</span>${restOfLine}`
    runeContainer.appendChild(lineDiv)
    await wait(200)
  }

  await wait(1000)

  // Add centered "ᛁᚾᛁᛏᛁᚨᛏᛁᚾᚷ ᛁᚱᛟᚾ ᛁᛞᛟᛚᛋ" in dark red
  const centerRuneDiv = document.createElement('div')
  centerRuneDiv.style.textAlign = 'center'
  centerRuneDiv.style.marginTop = '20px'
  centerRuneDiv.style.color = '#8b0000'
  const runeInitiatingText = 'ᛁᚾᛁᛏᛁᚨᛏᛁᚾᚷ ᛁᚱᛟᚾ ᛁᛞᛟᛚᛋ'
  centerRuneDiv.textContent = runeInitiatingText
  runeContainer.appendChild(centerRuneDiv)
  await wait(2000)

  // Backspace effect - delete character by character
  for (let i = runeInitiatingText.length - 1; i >= 0; i--) {
    centerRuneDiv.textContent = runeInitiatingText.substring(0, i)
    await wait(50) // 50ms per character deletion
  }

  await wait(300)

  // Type "Iron Idols" in white
  centerRuneDiv.style.color = '#ffffff'
  await typeText(centerRuneDiv, 'Iron Idols', 100)
  await wait(3000)

  if (skipToEnd) return

  // Step 7: Final wipe → Iron Idols lore paragraph (typed)
  clearScreen(terminal)
  const loreDiv = document.createElement('div')
  terminal.appendChild(loreDiv)

  const loreText = `Iron Idols is mythology in motion where faith meets circuitry, and war becomes transcendence.

Deep beneath the ruins of a dead world, a hundred meters below the surface, the last survivors still breathe.
They live among rust, dust, and memory haunted by the endless war that rages above.
Steel groans. The earth trembles. Every echo from the surface is a hymn of hate, love, and pain.

Down here, they forged sound from despair turning screams into rhythm, loss into pulse, and faith into fire.
Each track is a fragment of their confession, each note a prayer to forgotten gods of metal and light.

When the world above burns, Iron Idols rise from the depths not to save, but to eclipse the endless cries of a dying war.
This is not music. This is survival.`

  await typeText(loreDiv, loreText, 30)
  await wait(200)

  if (skipToEnd) return

  // Step 8: Impressum / Contact (typed)
  const contactSection = document.createElement('div')
  contactSection.className = 'contact-section'
  terminal.appendChild(contactSection)

  // Create text container (left side)
  const contactTextDiv = document.createElement('div')
  contactTextDiv.className = 'contact-text'
  contactSection.appendChild(contactTextDiv)

  // Create initial logo (right side) - add immediately so it starts loading animation
  const logoImg = document.createElement('img')
  logoImg.src = '/Images/1.jpg'
  logoImg.alt = 'Iron Idols'
  logoImg.className = 'iron-idols-logo'
  contactSection.appendChild(logoImg)

  // After 3 seconds (when progressive load finishes), replace with slider
  setTimeout(() => {
    // Remove the single image
    logoImg.remove()

    // Create slider container
    const sliderContainer = document.createElement('div')
    sliderContainer.className = 'image-slider'

    const sliderImages = document.createElement('div')
    sliderImages.className = 'slider-images'

    // Add all 3 images
    const imageFiles = ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg']
    imageFiles.forEach((src, index) => {
      const img = document.createElement('img')
      img.src = src
      img.alt = 'Iron Idols'
      img.className = 'slider-image'
      // Stretch image 3
      if (index === 2) {
        img.style.objectFit = 'fill'
      }
      sliderImages.appendChild(img)
    })

    sliderContainer.appendChild(sliderImages)
    contactSection.appendChild(sliderContainer)

    // Auto-slide every 5 seconds
    let currentIndex = 0
    setInterval(() => {
      currentIndex = (currentIndex + 1) % imageFiles.length
      sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`
    }, 5000)
  }, 3000)

  // Type the contact text
  const contactTextBefore = `

Contact:
Maximilian H. Stelzl · Iron Idols
`

  await typeText(contactTextDiv, contactTextBefore, 30)

  // Type and add clickable email
  const emailLink = document.createElement('a')
  emailLink.href = 'mailto:alive@ironidols.com'
  emailLink.style.color = '#ffffff'
  emailLink.style.textDecoration = 'underline'
  contactTextDiv.appendChild(emailLink)
  await typeText(emailLink, 'alive@ironidols.com', 30)

  // Add line break and type Press Release link
  await typeText(contactTextDiv, '\n', 30)

  const pressReleaseLink = document.createElement('a')
  pressReleaseLink.href = '/Iron_Idols_TESTAMENT_PressRelease.pdf'
  pressReleaseLink.target = '_blank'
  pressReleaseLink.rel = 'noopener noreferrer'
  pressReleaseLink.style.color = '#ffffff'
  pressReleaseLink.style.textDecoration = 'underline'
  contactTextDiv.appendChild(pressReleaseLink)
  await typeText(pressReleaseLink, 'Press Release', 30)

  // Add spacing before social links
  await typeText(contactTextDiv, '\n\n', 30)

  // Type social media links
  const spotifyLink = document.createElement('a')
  spotifyLink.href = 'https://open.spotify.com/intl-de/artist/4VZiUzDKU1sbOPag8TbwZc'
  spotifyLink.target = '_blank'
  spotifyLink.rel = 'noopener noreferrer'
  spotifyLink.style.color = '#ffffff'
  spotifyLink.style.textDecoration = 'underline'
  contactTextDiv.appendChild(spotifyLink)
  await typeText(spotifyLink, 'Spotify', 30)

  await typeText(contactTextDiv, ' | ', 30)

  const instagramLink = document.createElement('a')
  instagramLink.href = 'https://www.instagram.com/iron.idols/'
  instagramLink.target = '_blank'
  instagramLink.rel = 'noopener noreferrer'
  instagramLink.style.color = '#ffffff'
  instagramLink.style.textDecoration = 'underline'
  contactTextDiv.appendChild(instagramLink)
  await typeText(instagramLink, 'Instagram', 30)

  await typeText(contactTextDiv, ' | ', 30)

  const youtubeLink = document.createElement('a')
  youtubeLink.href = 'https://www.youtube.com/channel/UC4r7a8AAA9ApFhhAXdt9Pqw'
  youtubeLink.target = '_blank'
  youtubeLink.rel = 'noopener noreferrer'
  youtubeLink.style.color = '#ffffff'
  youtubeLink.style.textDecoration = 'underline'
  contactTextDiv.appendChild(youtubeLink)
  await typeText(youtubeLink, 'YouTube', 30)

  // Final blinking cursor
  terminal.appendChild(document.createTextNode('\n\n'))
  const finalCursor = createCursor('cursor-white')
  terminal.appendChild(finalCursor)

  // Remove fast-forward button when animation is complete
  if (ffButton && ffButton.parentNode) {
    ffButton.remove()
  }

  // Wait 5 minutes (300 seconds)
  await wait(300000)

  // Remove the cursor
  finalCursor.remove()

  // Type the hidden message centered at bottom
  const hiddenMessageDiv = document.createElement('div')
  hiddenMessageDiv.className = 'hidden-message'
  terminal.appendChild(hiddenMessageDiv)
  await typeText(hiddenMessageDiv, 'eternal… steel… blessing… tower…', 100)
}

// Start sequence when page loads
window.addEventListener('DOMContentLoaded', () => {
  runSequence()
})
