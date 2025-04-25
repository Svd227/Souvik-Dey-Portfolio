
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ fontSize: '2.5rem', textAlign: 'center' }}>
        Souvik Dey – Creative Portfolio
      </motion.h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
        {[
          { title: 'Product Posters', desc: 'Brand-aligned visuals for promotions.', url: 'https://drive.google.com/drive/folders/1l7ywK33x0t84GOU5PInKPTsBNcbN-zfD' },
          { title: 'Photo Manipulation', desc: 'Surreal and artistic edits.', url: 'https://drive.google.com/drive/folders/1OHBVGzCbnAabAYc35-Vyq8PVk7HeeD0G' },
          { title: 'Email Campaigns', desc: 'Structured brand designs.', url: 'https://drive.google.com/drive/folders/1rO4q8PvWa3YrIOMfRNNf7NMaJeO2moKp' },
          { title: 'Videography & Editing', desc: 'Storytelling with visuals.', url: 'https://drive.google.com/drive/folders/1eWvA16BAOwcyiFyW5pd9FtZwPFYF0zH3' },
          { title: 'Animation', desc: 'Motion graphics & animated content.', url: 'https://drive.google.com/drive/folders/1Hc0pWhBiGbKpAphb-k3I3anT8CgPTHLM' },
          { title: 'Portrait Photography', desc: 'Capturing emotion and essence.', url: 'https://drive.google.com/drive/folders/1sC2m-YhR1Fj-qA69X9XCEf8VMMNjOi6W' }
        ].map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h2>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.desc}</p>
            <a href={item.url} target="_blank" style={{ color: '#0070f3' }}>View Work</a>
          </div>
        ))}
      </div>
    </div>
  )
}
