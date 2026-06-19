export default function FacebookReel() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-accent text-xs tracking-[0.2em] font-semibold uppercase">
            Media
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3">
            Watch Our Reel
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="flex flex-col gap-6 ">
          <div className="relative aspect-video rounded-2xl shadow-lg">
            <iframe
              src="https://youtube.com/embed/JeFkRimv2gk?si=y10Dl0CTy4_X5LhG"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Glorycloud Assembly YouTube Reel"
            />
          </div>
          <div className="relative aspect-video rounded-2xl shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/hOIMnMnnLSQ?si=hHwFt8JP6np_KX1E"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Glorycloud Assembly YouTube Reel"
            />
          </div>
          <div className="relative aspect-video rounded-2xl shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/H6S3qXHyUKc?si=g2JVbXE8e0l4d3qG"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Glorycloud Assembly YouTube Reel"
            />
          </div>
          <div className="relative aspect-video rounded-2xl shadow-lg">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/v/18ybBzxHBF/&show_text=false&autoplay=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Glorycloud Assembly Facebook Reel"
            />
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs mt-4">
          Follow us on Facebook: Oyenekan Adekunle, Oyenekan Kunle, Glorycloud
          Assembly Ijoko, Glorycloud Assembly Osogbo, Glorycloud Assembly
          Worldwide
        </p>
      </div>
    </section>
  );
}
