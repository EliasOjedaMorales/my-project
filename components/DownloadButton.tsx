import React from 'react'

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = '/MiCv.pdf'

    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'MiCv.pdf'
    link.click()
  }

  return (
    <button onClick={handleDownload} className='text-neutral-100 font-semibold px-6 py-3 bg-amber-600 rounded shadow hover:bg-amber-700 cursor-pointer dark:bg-[#efcd30] dark:hover:bg-yellow-500'>
      Descargar curriculum
    </button>
  )
}

export default DownloadButton
