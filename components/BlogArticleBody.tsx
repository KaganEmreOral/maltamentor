type Props = { locale: string; slug: string };

export function BlogArticleBody({ locale, slug }: Props) {
  const isEn = locale === 'en';

  if (slug === 'it-job-market-malta') {
    if (isEn) {
      return (
        <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
          <p>
            Malta has become an attractive destination for IT professionals looking to relocate. Here is an overview of what you can expect.
          </p>
          <h2>Demand for developers and DevOps engineers</h2>
          <p>
            The local tech sector continues to grow, with strong demand for software developers, DevOps engineers, and IT specialists. Gaming, fintech, and remote-work companies often hire internationally, so experience with modern stacks and cloud technologies is valued.
          </p>
          <h2>Salary expectations</h2>
          <p>
            Salaries in Malta for IT roles are competitive within the European context. They vary by seniority and specialisation but generally align with Mediterranean tech hubs. Many positions also offer benefits such as health insurance and relocation support.
          </p>
          <h2>Work culture</h2>
          <p>
            Malta offers a relatively relaxed work culture compared to some larger European cities, with a focus on work-life balance. English is widely used in business, which makes integration easier for international professionals.
          </p>
          <h2>Relocation benefits</h2>
          <p>
            Malta’s favourable tax system, sunny climate, and EU membership make it appealing for relocation. The island is well connected and many companies are used to onboarding talent from abroad.
          </p>
          <h2>Why Malta is attractive for tech professionals</h2>
          <p>
            In summary: a growing IT job market, competitive pay, English-speaking environment, and a good quality of life make Malta a realistic option for tech professionals considering a move. With the right preparation—CV, LinkedIn, and interview skills—you can tap into these opportunities.
          </p>
        </div>
      );
    }
    return (
      <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
        <p>
          Malta, IT profesyonellerinin taşınmak için tercih ettiği bir destinasyon haline geldi. Neler bekleyebileceğinize dair bir özet.
        </p>
        <h2>Geliştiricilere ve DevOps mühendislerine talep</h2>
        <p>
          Yerel teknoloji sektörü büyümeye devam ediyor; yazılım geliştiricileri, DevOps mühendisleri ve IT uzmanlarına güçlü talep var. Oyun, fintech ve uzaktan çalışma şirketleri sıklıkla uluslararası işe alım yapıyor; modern teknolojiler ve bulut deneyimi değer görüyor.
        </p>
        <h2>Maaş beklentileri</h2>
        <p>
          Malta’da IT rollerinde maaşlar Avrupa bağlamında rekabetçi. Kıdem ve uzmanlığa göre değişir ancak genelde Akdeniz teknoloji merkezleriyle uyumludur. Birçok pozisyon sağlık sigortası ve taşınma desteği gibi yan haklar da sunar.
        </p>
        <h2>İş kültürü</h2>
        <p>
          Malta, bazı büyük Avrupa şehirlerine kıyasla nispeten sakin bir iş kültürü ve iş-yaşam dengesine odak sunar. İngilizce iş hayatında yaygın kullanılır; bu da uluslararası profesyonellerin uyum sağlamasını kolaylaştırır.
        </p>
        <h2>Taşınma avantajları</h2>
        <p>
          Malta’nın uygun vergi sistemi, güneşli iklimi ve AB üyeliği taşınmayı cazip kılıyor. Ada iyi bağlantılara sahip ve birçok şirket yurtdışından yetenek işe alımına alışkın.
        </p>
        <h2>Malta neden tech profesyonelleri için cazip</h2>
        <p>
          Özetle: büyüyen IT iş piyasası, rekabetçi maaşlar, İngilizce konuşulan ortam ve iyi yaşam kalitesi, taşınmayı düşünen tech profesyonelleri için Malta’yı gerçekçi bir seçenek yapıyor. Doğru hazırlıkla—CV, LinkedIn ve mülakat becerileri—bu fırsatlara ulaşabilirsiniz.
        </p>
      </div>
    );
  }

  if (slug === 'cost-of-living-malta-it') {
    if (isEn) {
      return (
        <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
          <p>
            Planning your budget before moving to Malta helps you negotiate offers and settle faster. Figures change over time, but these categories matter most for IT professionals.
          </p>
          <h2>Housing</h2>
          <p>
            Rent is often the largest expense. Popular areas near tech hubs or with good transport links (Sliema, St Julian’s, Gzira, central Malta) tend to cost more than quieter towns. Sharing or starting slightly outside the centre can reduce costs while you learn the market.
          </p>
          <h2>Utilities and internet</h2>
          <p>
            Electricity and water vary by season and usage. Fibre internet is widely available—important if you work remotely. Bundle mobile and home internet where it makes sense.
          </p>
          <h2>Transport</h2>
          <p>
            Many people use buses; a tallinja card keeps travel predictable. Some drive or use scooters. Distances are short, so commuting rarely matches big-city commutes in time or cost.
          </p>
          <h2>Food and daily life</h2>
          <p>
            Supermarkets and local produce offer a range of price points. Eating out ranges from affordable takeaways to waterfront dining. Budgeting a realistic mix helps you enjoy Malta without surprises.
          </p>
          <h2>Takeaway</h2>
          <p>
            Build a spreadsheet with rent, bills, transport, and savings goals. That clarity supports salary discussions and helps you decide when an offer truly fits your lifestyle.
          </p>
        </div>
      );
    }
    return (
      <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
        <p>
          Malta’ya taşınmadan önce bütçe planlamak, maaş görüşmelerinde daha net olmanıza ve daha hızlı yerleşmenize yardımcı olur. Rakamlar zamanla değişir; IT profesyonelleri için en kritik kalemler bunlar.
        </p>
        <h2>Konut</h2>
        <p>
          Kira genelde en büyük giderdir. Teknoloji bölgelerine veya iyi ulaşıma yakın popüler semtler (Sliema, St Julian’s, Gzira, merkez Malta) genelde daha pahalıdır. Pazarı öğrenene kadar paylaşımlı konut veya merkez dışı başlangıç maliyeti düşürebilir.
        </p>
        <h2>Faturalar ve internet</h2>
        <p>
          Elektrik ve su kullanıma ve mevsime göre değişir. Uzaktan çalışıyorsanız fiber internet yaygındır. Mobil ve ev internetini paketlemek mantıklı olabilir.
        </p>
        <h2>Ulaşım</h2>
        <p>
          Birçok kişi otobüs kullanır; tallinja kartı maliyeti öngörülebilir kılar. Kimileri araç veya scooter tercih eder. Mesafeler kısa olduğundan büyük şehirlerdeki gibi uzun ve pahalı işe gidip gelme nadirdir.
        </p>
        <h2>Gıda ve günlük yaşam</h2>
        <p>
          Süpermarketler ve yerel ürünler farklı fiyat aralıkları sunar. Dışarıda yemek uygun fiyatlı seçeneklerden deniz kenarı restoranlara kadar geniş bir yelpazededir.
        </p>
        <h2>Özet</h2>
        <p>
          Kira, faturalar, ulaşım ve tasarruf hedeflerini içeren bir tablo oluşturun; bu netlik maaş görüşmelerinde ve teklifleri değerlendirirken işinize yarar.
        </p>
      </div>
    );
  }

  if (slug === 'weekends-culture-malta') {
    if (isEn) {
      return (
        <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
          <p>
            Malta is more than a workplace. Understanding language, rhythm of life, and how people spend weekends makes settling in easier—and interviews often touch on “fit” as well as skills.
          </p>
          <h2>English in daily life</h2>
          <p>
            English is an official language and dominates professional settings. You will also hear Maltese in shops and among locals. Many expats live comfortably with English alone while picking up phrases over time.
          </p>
          <h2>Valletta and heritage</h2>
          <p>
            The capital Valletta is compact and full of history—fortifications, museums, and cafés. It is an easy weekend trip from most of the island and a good way to connect with Malta’s story beyond the office.
          </p>
          <h2>Coast and islands</h2>
          <p>
            Swimming, hiking, and boat trips to Gozo or Comino are popular. The sea is central to social life; summer evenings often spill onto terraces and bays.
          </p>
          <h2>Community and pace</h2>
          <p>
            Meetups, sports clubs, and tech events help you build a network outside work. The pace is generally slower than in megacities—use that to recharge and explore.
          </p>
        </div>
      );
    }
    return (
      <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
        <p>
          Malta sadece bir iş yeri değil. Dili, yaşam ritmini ve insanların hafta sonlarını nasıl geçirdiğini anlamak yerleşmeyi kolaylaştırır; mülakatlarda da “uyum” sıkça konuşulur.
        </p>
        <h2>Günlük hayatta İngilizce</h2>
        <p>
          İngilizce resmi dillerden biridir ve iş ortamında baskındır. Dükkanlarda ve yerel halk arasında Maltça da duyulur. Birçok yabancı yalnızca İngilizceyle rahat yaşarken zamanla kısa ifadeler öğrenir.
        </p>
        <h2>Valletta ve miras</h2>
        <p>
          Başkent Valletta tarihle dolu, kompakt bir şehir—sur duvarları, müzeler ve kafeler. Adanın çoğu yerinden hafta sonu kolayca gidilir; ofis dışında Malta ile bağ kurmak için iyi bir başlangıçtır.
        </p>
        <h2>Kıyı ve adalar</h2>
        <p>
          Yüzme, yürüyüş ve Gozo veya Comino’ya tekne turları popülerdir. Deniz sosyal hayatın merkezindedir; yaz akşamları teras ve koylarda uzar.
        </p>
        <h2>Topluluk ve tempo</h2>
        <p>
          Meetup’lar, spor kulüpleri ve etkinlikler iş dışında ağ kurmanıza yardım eder. Tempo genelde büyük metropollerden daha sakin—bunu keşfetmek ve dinlenmek için kullanın.
        </p>
      </div>
    );
  }

  return null;
}
