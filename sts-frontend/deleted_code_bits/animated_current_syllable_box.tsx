{/* Animated current syllable box (optional) */}
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <AnimatePresence mode="wait">
    <motion.div
      key={currentSyllable}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.05 }}
      style={{
        fontSize: '4rem',
        marginBottom: '3rem',
      }}
    >
      {currentSyllable}
    </motion.div>
  </AnimatePresence>
