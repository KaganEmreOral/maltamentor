type Props = { locale: string; slug: string };

export function BlogArticleBody({ locale, slug }: Props) {
  const isEn = locale === 'en';

  if (slug === 'it-job-market-malta') {
    if (isEn) {
      return (
        <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
          <p>
            Malta has become an attractive destination for IT professionals looking to relocate. The island combines EU membership, a growing digital economy, and English as a working language. Below is a structured overview of what you can realistically expect when you explore roles here—not only salaries, but hiring patterns, sectors, and how to position yourself.
          </p>
          <h2>Demand for developers and DevOps engineers</h2>
          <p>
            The local tech sector continues to grow, with strong demand for software developers, DevOps engineers, cloud specialists, and security-minded IT profiles. Gaming, fintech, payments, and companies serving international clients often hire internationally. Experience with modern stacks (TypeScript, cloud platforms, containers, CI/CD) is widely valued; legacy and enterprise skills also find a place in larger organisations.
          </p>
          <p>
            Remote-first and hybrid arrangements exist, but many employers still prefer some office presence—especially in teams that collaborate across time zones. When you read job ads, note whether the role is Malta-based with local employment or a remote contract; that affects tax and residency questions you should clarify early.
          </p>
          <h2>Salary expectations</h2>
          <p>
            Salaries in Malta for IT roles are competitive within the European context, though they may not match the very top bands of London or Zurich for equivalent seniority. They vary by seniority, stack, and whether the company is a startup, scale-up, or established operator. Many positions offer benefits such as health insurance, wellness allowances, and sometimes relocation or flight support for international hires.
          </p>
          <p>
            Use multiple sources—job boards, recruiter conversations, and peer networks—to build a range for your level. In interviews, it helps to anchor expectations to your current package and the cost of living you target in Malta (rent being the largest variable).
          </p>
          <h2>Work culture and language</h2>
          <p>
            Malta offers a relatively relaxed work culture compared to some larger European cities, with growing attention to work-life balance. English dominates professional communication; you will also hear Maltese in daily life. Learning a few polite phrases can help socially, but IT teams rarely require Maltese for technical work.
          </p>
          <h2>Relocation and practical fit</h2>
          <p>
            Malta’s location, EU framework, and widespread use of English make it approachable for relocation. Companies are generally accustomed to onboarding people from abroad, but paperwork (residence, tax number, bank account) still takes time—plan for it when you accept an offer.
          </p>
          <h2>Why Malta remains attractive for tech professionals</h2>
          <p>
            In summary: a growing IT job market, competitive pay for the region, an English-speaking business environment, and a strong quality-of-life proposition make Malta a realistic option for tech professionals considering a move. With solid preparation—CV, LinkedIn, interview stories, and clarity on your visa or work-authorisation path—you can navigate the market confidently and choose roles that fit both your skills and your lifestyle goals.
          </p>
        </div>
      );
    }
    return (
      <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
        <p>
          Malta, IT profesyonellerinin taşınmak için tercih ettiği destinasyonlardan biri. Ada; AB üyeliği, büyüyen dijital ekonomi ve iş hayatında İngilizce kullanımını bir araya getiriyor. Aşağıda yalnızca maaş değil; işe alım dinamikleri, sektörler ve kendinizi nasıl konumlandıracağınıza dair daha uzun bir çerçeve bulacaksınız.
        </p>
        <h2>Geliştiricilere ve DevOps mühendislerine talep</h2>
        <p>
          Yerel teknoloji sektörü büyümeye devam ediyor; yazılım geliştiricileri, DevOps mühendisleri, bulut uzmanları ve güvenlik odaklı IT profillerine güçlü talep var. Oyun, fintech, ödeme ve uluslararası müşteriye hizmet veren şirketler sıklıkla yurtdışından işe alım yapıyor. TypeScript, bulut platformları, konteynerler ve CI/CD gibi modern yığınlara aşinalık değer görüyor; kurumsal ve legacy tecrübeler de büyük organizasyonlarda yer buluyor.
        </p>
        <p>
          Uzaktan veya hibrit çalışma yaygınlaştı; yine de birçok işveren, özellikle farklı saat dilimleriyle çalışan ekiplerde, belirli oranda ofis bulunurluğunu tercih ediyor. İlanları okurken pozisyonun Malta merkezli istihdam mı yoksa uzaktan sözleşme mi olduğunu not edin; bu, vergi ve oturum konularında erken netleştirmeniz gereken ayrıntıları etkiler.
        </p>
        <h2>Maaş beklentileri</h2>
        <p>
          Malta’da IT rollerinde maaşlar Avrupa bağlamında rekabetçidir; ancak aynı kıdem için Londra veya Zürih’in en üst bantlarıyla bire bir örtüşmeyebilir. Kıdem, teknoloji yığını ve şirketin yapısı (girişim, scale-up, kurulu oyuncu) sonucu belirgin şekilde etkiler. Birçok pozisyon sağlık sigortası, esnek yan haklar ve bazen uluslararası adaylar için taşınma veya uçuş desteği sunar.
        </p>
        <p>
          Beklentinizi tek kaynağa bağlamayın: iş ilanları, recruiter görüşmeleri ve sektördeki insanlarla konuşarak kendi seviyeniz için bir aralık oluşturun. Mülakatlarda mevcut paketinizi ve Malta’da hedeflediğiniz yaşam maliyetini (en büyük değişken genelde kira) referans göstermek faydalıdır.
        </p>
        <h2>İş kültürü ve dil</h2>
        <p>
          Malta, bazı büyük Avrupa şehirlerine kıyasla nispeten daha sakin bir tempo ve artan iş-yaşam dengesi anlayışı sunar. Profesyonel iletişimde İngilizce baskındır; günlük hayatta Maltaca da duyulur. Birkaç nezaket ifadesi öğrenmek sosyal uyumu kolaylaştırır; ancak teknik rollerde Maltaca genelde zorunlu değildir.
        </p>
        <h2>Taşınma ve pratik uyum</h2>
        <p>
          Malta’nın konumu, AB çerçevesi ve İngilizce’nin yaygınlığı taşınmayı erişilebilir kılar. Şirketler yurtdışından gelenleri işe alışkındır; buna rağmen oturum, vergi numarası, banka hesabı gibi süreçler zaman alır—teklifi kabul ederken takviminizi buna göre planlayın.
        </p>
        <h2>Özet: Malta neden hâlâ cazip?</h2>
        <p>
          Büyüyen IT iş piyasası, bölge için rekabetçi ücretler, İngilizce iş ortamı ve güçlü yaşam kalitesi, Malta’yı taşınmayı düşünen tech profesyonelleri için gerçekçi bir seçenek yapıyor. CV, LinkedIn, mülakat hikâyeleriniz ve varsa çalışma izni/oturum yolunuz net olduğunda piyasayı daha güvenle okuyabilir ve hem yetkinliklerinize hem yaşam tarzınıza uyan rolleri seçebilirsiniz.
        </p>
      </div>
    );
  }

  if (slug === 'cost-of-living-malta-it') {
    if (isEn) {
      return (
        <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
          <p>
            Planning your budget before moving to Malta helps you negotiate offers, avoid cash-flow stress in the first months, and settle faster. Figures change with inflation and personal habits, but these categories matter most for IT professionals who want a realistic picture—not a headline number from a single blog post.
          </p>
          <h2>Housing</h2>
          <p>
            Rent is often the largest expense. Popular areas near tech hubs or with good transport links—such as Sliema, St Julian’s, Gzira, and parts of central Malta—tend to cost more than quieter towns in the north or south. Sharing accommodation or starting slightly outside the centre can reduce costs while you learn which neighbourhoods match your commute and lifestyle.
          </p>
          <p>
            When viewing flats, ask about included appliances, air conditioning costs in summer, and whether water and common charges are bundled. A slightly higher rent with utilities clarified upfront can be easier to manage than a “cheap” rent with surprises.
          </p>
          <h2>Utilities and internet</h2>
          <p>
            Electricity and water vary by season, insulation, and usage patterns. Fibre internet is widely available—critical if you work remotely or rely on video calls. Bundling mobile and home internet sometimes saves money; compare contract lengths and exit clauses before you commit.
          </p>
          <h2>Transport</h2>
          <p>
            Many residents use buses; a tallinja card keeps travel predictable. Some people drive or use scooters; parking in dense areas can be tight. Distances are short, so commuting rarely matches big-city time or cost, but rush-hour traffic around central corridors still exists—factor it into your routine.
          </p>
          <h2>Food, health, and daily life</h2>
          <p>
            Supermarkets and local produce offer a range of price points; seasonal fruit and vegetables from open markets can be good value. Eating out spans affordable takeaways to waterfront dining. Private health insurance is common in employment packages; understand what is covered and whether your family members are included.
          </p>
          <h2>Tax and take-home pay</h2>
          <p>
            Your net income depends on residency status, employment structure, and applicable tax rules. Treat online “salary after tax” calculators as indicative only; a payroll specialist or accountant familiar with Malta can give you a personalised estimate once you have an offer.
          </p>
          <h2>Takeaway</h2>
          <p>
            Build a simple spreadsheet with rent, bills, transport, groceries, savings, and an emergency buffer. That clarity supports salary discussions and helps you decide when an offer truly fits your lifestyle—not only the gross number on paper.
          </p>
        </div>
      );
    }
    return (
      <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
        <p>
          Malta’ya taşınmadan önce bütçe planlamak, maaş görüşmelerinde daha net olmanıza, ilk aylarda nakit sıkıntısı yaşamamanıza ve daha hızlı yerleşmenize yardımcı olur. Rakamlar enflasyon ve yaşam alışkanlıklarıyla değişir; ancak tek bir başlıktan ibaret olmayan, IT profesyonelleri için gerçekçi bir tablo çizmek istiyorsanız aşağıdaki kalemler en çok işinize yarar.
        </p>
        <h2>Konut</h2>
        <p>
          Kira genelde en büyük giderdir. Teknoloji bölgelerine veya iyi ulaşıma yakın popüler semtler—Sliema, St Julian’s, Gzira ve merkez Malta’nın bir kısmı—genelde kuzey veya güneydeki daha sakin kasabalardan daha pahalıdır. Pazarı öğrenene kadar paylaşımlı konut veya merkeze biraz daha uzak başlangıç maliyeti düşürebilir; hangi mahallelerin işe gidiş geliş ve yaşam tarzınıza uyduğunu zamanla netleştirirsiniz.
        </p>
        <p>
          Daire bakarken beyaz eşya ve klima dahil mi, yazın elektrik maliyeti nasıl, su ve ortak giderler kira içinde mi diye sorun. Önceden netleşmiş “biraz daha yüksek” bir kira, sürprizli ucuz kiradan yönetmesi kolay olabilir.
        </p>
        <h2>Faturalar ve internet</h2>
        <p>
          Elektrik ve su izolasyon, mevsim ve kullanıma göre değişir. Uzaktan çalışıyorsanız veya sık video görüşmesi yapıyorsanız fiber internet kritiktir. Mobil ve ev internetini paketlemek bazen tasarruf sağlar; sözleşme süresi ve cayma koşullarını karşılaştırın.
        </p>
        <h2>Ulaşım</h2>
        <p>
          Birçok kişi otobüs kullanır; tallinja kartı maliyeti öngörülebilir kılar. Kimileri araç veya scooter tercih eder; yoğun bölgelerde park zor olabilir. Mesafeler kısa olduğundan büyük şehirlerdeki gibi uzun işe gidip gelme nadirdir; yine de merkez koridorlarda yoğun saat trafiğini günlük rutininize ekleyin.
        </p>
        <h2>Gıda, sağlık ve günlük yaşam</h2>
        <p>
          Süpermarketler ve yerel ürünler farklı fiyat aralıkları sunar; mevsimsel ürünler için açık pazarlar iyi fiyat verebilir. Dışarıda yemek uygun fiyatlı seçeneklerden deniz kenarı restoranlara kadar geniş bir yelpazededir. Özel sağlık sigortası birçok istihdam paketinde yer alır; nelerin kapsandığını ve ailenizin dahil olup olmadığını netleştirin.
        </p>
        <h2>Vergi ve net gelir</h2>
        <p>
          Net geliriniz oturum durumu, istihdam yapısı ve yürürlükteki vergi kurallarına bağlıdır. İnternetten “maaş sonrası vergi” hesaplayıcılarını yalnızca yönlendirici görün; teklif netleşince Malta’ya aşina bir muhasebeci veya bordro uzmanı kişiselleştirilmiş tahmin verebilir.
        </p>
        <h2>Özet</h2>
        <p>
          Kira, faturalar, ulaşım, market, tasarruf ve acil durum tamponunu içeren sade bir tablo oluşturun; bu netlik maaş görüşmelerinde ve teklifleri değerlendirirken brüt rakamın ötesinde yaşam tarzınıza uygunluğu görmenizi sağlar.
        </p>
      </div>
    );
  }

  if (slug === 'weekends-culture-malta') {
    if (isEn) {
      return (
        <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
          <p>
            Malta is more than a workplace. Understanding how language works in daily life, how weekends and public holidays feel, and how people socialise makes settling in easier—and interviews often touch on cultural fit as well as technical skills.
          </p>
          <h2>English in daily life—and Maltese</h2>
          <p>
            English is an official language and dominates professional settings. You will also hear Maltese in shops, on buses, and among friends and family. Many expats live comfortably with English alone while slowly picking up phrases. Showing curiosity about Maltese culture without pretending fluency usually goes down well.
          </p>
          <h2>Valletta and heritage</h2>
          <p>
            The capital Valletta is compact and full of history—fortifications, museums, theatres, and cafés. It is an easy weekend trip from most of the island and a good way to connect with Malta’s story beyond the office. Walking the bastions at sunset is a simple ritual many residents never tire of.
          </p>
          <h2>Coast, villages, and the smaller islands</h2>
          <p>
            Swimming, hiking along cliff paths, and boat trips to Gozo or Comino are popular ways to decompress. The sea is central to social life; summer evenings often spill onto terraces and bays. In quieter months, village festas, wine bars, and cultural events still give rhythm to the week.
          </p>
          <h2>Community, hobbies, and pace</h2>
          <p>
            Meetups, sports clubs, diving schools, and tech events help you build a network outside work. The pace is generally slower than in megacities—many newcomers use that space to recover from intense careers and explore new hobbies. Saying yes to a few invitations early on often accelerates feeling “at home.”
          </p>
          <h2>Practical tips for your first year</h2>
          <p>
            Learn bus routes before you need them on a Sunday, keep sunscreen and water in your bag in summer, and accept that some shops close for a few hours in the afternoon. Small adaptations reduce friction and leave more energy for the parts of island life you came for—sun, sea, and a new chapter.
          </p>
        </div>
      );
    }
    return (
      <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-p:text-gray-600">
        <p>
          Malta sadece bir iş yeri değil. Günlük hayatta dilin nasıl işlediğini, hafta sonlarının ve resmi tatillerin nasıl hissedildiğini ve insanların nasıl sosyalleştiğini anlamak yerleşmeyi kolaylaştırır; mülakatlarda da teknik yetkinliğin yanında kültürel uyum sıkça konuşulur.
        </p>
        <h2>Günlük hayatta İngilizce ve Maltaca</h2>
        <p>
          İngilizce resmi dillerden biridir ve iş ortamında baskındır. Dükkanlarda, otobüslerde ve arkadaş çevrelerinde Maltaca da sık duyulur. Birçok yabancı yalnızca İngilizceyle rahat yaşarken zamanla kısa ifadeler öğrenir. Maltaca akıcılığı taklit etmeden kültüre merak göstermek genelde olumlu karşılanır.
        </p>
        <h2>Valletta ve miras</h2>
        <p>
          Başkent Valletta tarihle dolu, yürüyüşe uygun bir şehir—sur duvarları, müzeler, tiyatrolar ve kafeler. Adanın çoğu yerinden hafta sonu kolayca gidilir; ofis dışında Malta ile bağ kurmak için güçlü bir başlangıçtır. Gün batımında surlarda yürümek birçok sakinin sıkılmadığı basit bir ritüeldir.
        </p>
        <h2>Kıyı, köyler ve küçük adalar</h2>
        <p>
          Yüzme, uçurum patikalarında yürüyüş ve Gozo veya Comino’ya tekne turları stres atmak için popüler yollardır. Deniz sosyal hayatın merkezindedir; yaz akşamları teras ve koylarda uzar. Daha sakin aylarda köy festaları, şarap barları ve kültürel etkinlikler haftaya ritim katar.
        </p>
        <h2>Topluluk, hobiler ve tempo</h2>
        <p>
          Meetup’lar, spor kulüpleri, dalış okulları ve etkinlikler iş dışında ağ kurmanıza yardım eder. Tempo genelde büyük metropollerden daha sakin—birçok yeni gelen yoğun kariyer temposundan sonra nefes almak ve yeni hobiler denemek için bu alanı kullanır. İlk dönemde birkaç davete “evet” demek “evim gibi hissetmeyi” hızlandırır.
        </p>
        <h2>İlk yıl için pratik ipuçları</h2>
        <p>
          Pazar günü ihtiyaç duymadan önce otobüs hatlarını öğrenin, yazın çantanızda güneş kremi ve su bulundurun, bazı dükkânların öğleden sonra bir süre kapalı olduğunu kabullenin. Küçük uyumlar sürtüşmeyi azaltır; güneş, deniz ve yeni bir sayfa için enerjinizi korumanızı sağlar.
        </p>
      </div>
    );
  }

  return null;
}
