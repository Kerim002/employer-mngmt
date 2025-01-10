"use client";
import { Button } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Editor } from "@/widget/editor";
import React, { useState } from "react";

export const languages = [
  {
    full: "Turkmen",
    short: "tm",
  },
  {
    full: "English",
    short: "en",
  },
  {
    full: "Russian",
    short: "ru",
  },
];

const AboutPage = () => {
  const [lang, setLang] = React.useState<"tm" | "en" | "ru">("tm");
  const [data, setData] = useState<{ en: string; ru: string; tm: string }>({
    tm: '\u003cp class="ql-align-center"\u003e\u003cstrong\u003eBiz Barada\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eTMBIZ\u003c/strong\u003e -ýurdumyzda ilkinji \u003cu\u003egysga wideo akymly\u003c/u\u003e platforma! Biz bilen biznes dünýäsiniň ähli \u003cu\u003etendensiýalaryndan\u003c/u\u003e habardar boluň. Platformamyz iň täsirli we ykjam usulda ähli gerek zatlaryňyzy bir ekranda jemleýär. Tmbize goşulyň we çäksiz mümkinçilikleri başdan geçiriň.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eBiziň Maksadymyz\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e \u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;Biz harytlary we hyzmatlary ulanyjylara iň oňaýly akymda ýetirmegi maksat edinýäris, şeýle-de işewürleriň müşderiler bilen aňsat we çalt aragatnaşyk gurmagyny üpjün edýäris.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eBiziň Tapawudymyz\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e \u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;Platformamyzda işewürlere öz surat we gysga wideo kontentlerini ýerleşdirmäge mümkinçilik berilýär, olara öz müşderileri bilen gönüden-göni arabaglanyşygy döretmäge kömek berilýär. \u003c/p\u003e\u003cp\u003e\u003cstrong\u003eEsasy Aýratynlyklarymyz\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e·\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u003cstrong\u003eWideo kontent\u003c/strong\u003e: Işewürler öz harytlaryny we hyzmatlaryny görkezmek üçin täsirli wideo ýerleşdirip biler.\u003c/p\u003e\u003cp\u003e·\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u003cstrong\u003eResmi Saýlanan Hasaplar\u003c/strong\u003e: Ulanyjylar resmi hasaplary yzarlap, täze tekliplerden habarly bolup bilerler.\u003c/p\u003e\u003cp\u003e·\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u003cstrong\u003eHalananlar\u003c/strong\u003e: Ulanyjylar halan kontentlerini belläp, indiki gezek tapmagy aňsatlaşdyryp bilerler.\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003eTMBIZ platformasy, ulanyjylaryň tiz we aňsat hyzmatdyr harytlary tapyp bilmegi üçin döredildi.\u003c/p\u003e\u003cp\u003e\u0026nbsp;Gözleýän harytlaryňyzy ýa-da hyzmatlaryňyzy tapmak üçin platformamyza serediň we size laýyk teklipleri öwreniň. Ýurdumyzyň sanly ulgamynyň ösüşine goşant goşmak üçin döredilen işewürlik platforma. \u003cstrong\u003eTMBIZ –siziň sanly ýoldaşyňyz\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    en: '\u003cp class="ql-align-center"\u003e\u003cstrong\u003eAbout Us\u003c/strong\u003e\u003c/p\u003e\u003cp\u003eTMBIZ - the first short video streaming platform in our country! Stay informed on all the trends in the business world with us. Our platform brings everything you need together on a single screen in the most efficient and compact way. Join TMBIZ and experience endless possibilities.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eOur Goal\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e We aim to deliver products and services to users in the most convenient flow, ensuring that businesses can establish easy and fast communication with customers.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eOur Difference\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e Our platform allows businesses to post their photo and short video content, helping them establish direct connections with their customers.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eOur Key Features\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e • \u003cstrong\u003eVideo Content:\u003c/strong\u003e Businesses can post impactful videos to showcase their products and services.\u003c/p\u003e\u003cp\u003e • \u003cstrong\u003eOfficial Selected Accounts:\u003c/strong\u003e Users can follow official accounts to stay updated on new offers.\u003c/p\u003e\u003cp\u003e • \u003cstrong\u003eFavorites:\u003c/strong\u003e Users can mark favorite content, making it easier to find it next time.\u003c/p\u003e\u003cp\u003eThe TMBIZ platform was created to allow users to quickly and easily find products and services. \u003c/p\u003e\u003cp\u003eCheck out our platform to discover the products or services you’re looking for and explore offers tailored for you. A business platform created to contribute to the development of our country’s digital network.\u003c/p\u003e\u003cp\u003e \u003cstrong\u003eTMBIZ – your digital companion\u003c/strong\u003e\u003c/p\u003e',
    ru: '\u003cp class="ql-align-center"\u003e\u003cstrong\u003eО нас\u003c/strong\u003e\u003c/p\u003e\u003cp\u003eTMBIZ – первая платформа коротких видеороликов в нашей стране! Будьте в курсе всех тенденций в мире бизнеса с нами. Наша платформа объединяет все необходимое на одном экране наиболее эффективным и компактным способом. Присоединяйтесь к TMBIZ и наслаждайтесь безграничными возможностями.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eНаша цель\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e Мы стремимся доставлять товары и услуги пользователям в самом удобном формате, обеспечивая бизнесам легкую и быструю связь с клиентами.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eНаше отличие\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e Наша платформа позволяет бизнесам размещать свои фотографии и короткие видеоролики, что помогает им установить прямую связь с клиентами.\u003c/p\u003e\u003cp\u003e\u003cstrong\u003eНаши основные особенности\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e • \u003cstrong\u003eВидеоконтент:\u003c/strong\u003e Бизнесы могут показать свои товары и услуги размещая эффектные видеоролики.\u003c/p\u003e\u003cp\u003e • \u003cstrong\u003eОфициальные избранные аккаунты:\u003c/strong\u003e Пользователи могут подписываться на официальные аккаунты, чтобы оставаться в курсе новых предложений.\u003c/p\u003e\u003cp\u003e • \u003cstrong\u003eИзбранное:\u003c/strong\u003e Пользователи могут отмечать понравившийся контент, чтобы легче находить его в следующий раз.\u003c/p\u003e\u003cp\u003eПлатформа TMBIZ была создана для того, чтобы пользователи могли быстро и легко находить товары и услуги.\u003c/p\u003e\u003cp\u003eОзнакомьтесь с нашей платформой, чтобы найти интересующие вас товары или услуги и изучить подходящие вам предложения. Наша платформа, создана для вклада в развитие цифровой системы нашей страны.\u003c/p\u003e\u003cp\u003e \u003cstrong\u003eTMBIZ – ваш цифровой спутник\u003c/strong\u003e\u003c/p\u003e',
  });
  const [active, setActive] = React.useState<boolean>();
  return (
    <div className="flex-1 flex flex-col">
      <div className="w-full flex justify-end gap-3">
        <Button onClick={() => setActive((prev) => !prev)}>
          {active ? "Save" : "Edit"}
        </Button>
        <Select
          value={lang}
          onValueChange={(value: "en" | "ru" | "tm") => setLang(value)}
          disabled={active}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((language) => (
              <SelectItem key={language.short} value={language.short}>
                {language.full}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {active ? (
        <>
          <Editor content={data[lang]} />
        </>
      ) : (
        <>
          <div
            onDoubleClick={() => setActive(true)}
            className="w-full mt-10"
            dangerouslySetInnerHTML={{ __html: data[lang] }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AboutPage;
