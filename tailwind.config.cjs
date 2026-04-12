/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Border radius ──────────────────────────────────────────────────────
      borderRadius: {
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        full: 'var(--radius-full)',
        DEFAULT: 'var(--radius-md)',
      },

      // ── Box shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        sm:      'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md:      'var(--shadow-md)',
        lg:      'var(--shadow-lg)',
        xl:      'var(--shadow-xl)',
        card:    'var(--shadow-card)',
        'neon-cyan':   '0 0 20px rgba(0, 224, 202, 0.4), 0 0 40px rgba(0, 224, 202, 0.2)',
        'neon-purple': '0 0 20px rgba(190, 94, 237, 0.4), 0 0 40px rgba(190, 94, 237, 0.2)',
      },

      // ── Font families ────────────────────────────────────────────────────────
      fontFamily: {
        sans:    ['DM Sans', 'var(--font-sans)', 'sans-serif'],
        heading: ['Space Grotesk', 'var(--font-heading)', 'sans-serif'],
        mono:    ['JetBrains Mono', 'var(--font-mono)', 'monospace'],
        serif:   ['Georgia', 'serif'],
      },

      // ── Font sizes ──────────────────────────────────────────────────────────
      fontSize: {
        xs:   ['var(--font-size-xs)',   { lineHeight: 'var(--line-height-tight)' }],
        sm:   ['var(--font-size-sm)',   { lineHeight: 'var(--line-height-normal)' }],
        base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
        lg:   ['var(--font-size-lg)',   { lineHeight: 'var(--line-height-relaxed)' }],
        xl:   ['var(--font-size-xl)',   { lineHeight: 'var(--line-height-heading)' }],
        '2xl':['var(--font-size-2xl)',  { lineHeight: 'var(--line-height-heading)' }],
      },

      // ── Colors ───────────────────────────────────────────────────────────────
      colors: {
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT:              'hsl(var(--sidebar))',
          foreground:           'hsl(var(--sidebar-foreground))',
          primary:              'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent:               'hsl(var(--sidebar-accent))',
          'accent-foreground':  'hsl(var(--sidebar-accent-foreground))',
          border:               'hsl(var(--sidebar-border))',
          ring:                 'hsl(var(--sidebar-ring))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Portfolio-specific custom colors
        cyan:   { DEFAULT: '#00e0ca', light: 'rgba(0,224,202,0.1)', dark: '#00a8c0' },
        purple: { DEFAULT: '#be5eed', light: 'rgba(190,94,237,0.1)', dark: '#9333ea' },
        'dark-bg':   '#0a0b0f',
        'dark-card': '#17171c',
        'dark-card2': '#0d0e14',
      },

      // ── Transitions ─────────────────────────────────────────────────────────
      transitionDuration: {
        fast:    'var(--duration-fast)',
        DEFAULT: 'var(--duration-normal)',
        slow:    'var(--duration-slow)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--easing-default)',
        smooth:  'var(--easing-smooth)',
        bounce:  'var(--easing-bounce)',
      },

      // ── Animations ──────────────────────────────────────────────────────────
      animation: {
        'fade-in':         'fade-in 0.5s ease-out',
        'fade-in-up':      'fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-in-left':    'fadeInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'slide-up':        'slide-up 0.5s ease-out',
        'accordion-down':  'accordion-down 0.2s ease-out',
        'accordion-up':    'accordion-up 0.2s ease-out',
        'glow-pulse':      'glow-pulse 2s ease-in-out infinite',
        'spin-slow':       'spin-slow 8s linear infinite',
        'float':           'float 20s linear infinite',
        'gradient-shift':  'gradient-shift 4s ease infinite',
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%':   { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,224,202,0.3), 0 0 10px rgba(0,224,202,0.15)' },
          '50%':      { boxShadow: '0 0 20px rgba(0,224,202,0.6), 0 0 40px rgba(0,224,202,0.3)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
