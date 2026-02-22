type Props = { locale: string };

export function SampleArticleContent({ locale }: Props) {
  const isEn = locale === 'en';

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
