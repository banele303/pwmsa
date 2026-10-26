"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, FileText, Printer, Share2, Check } from "lucide-react";

interface Newsletter2026Props {
  initialPage?: number | "all";
  showPageNavigation?: boolean;
}

export default function Newsletter2026Document({
  initialPage = "all",
  showPageNavigation = true,
}: Newsletter2026Props) {
  const [currentPage, setCurrentPage] = useState<number | "all">(initialPage);

  const renderPage1 = () => (
    <div className="bg-white text-gray-900 shadow-md border border-gray-200 rounded-xl p-8 sm:p-14 max-w-[850px] mx-auto min-h-[1100px] flex flex-col justify-between font-serif relative">
      <div>
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo.png"
              alt="PWMSA Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <span className="text-[11px] font-bold text-gray-700 tracking-wider mt-1 font-sans">
              PWMSA
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-700 italic tracking-wide">
            Women&apos;s Voices, Collective Action, Social Transformation
          </p>

          <h1 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-gray-900 uppercase pt-1">
            PROGRESSIVE WOMEN&apos;S MOVEMENT OF SOUTH AFRICA
          </h1>

          <div className="w-full h-[2px] bg-[#d4af37] my-3" />
        </div>

        {/* Subheader / Metadata */}
        <div className="text-xs sm:text-sm text-gray-800 space-y-1.5 py-2 font-sans">
          <p>
            <strong>Communications, Advocacy &amp; Organisational Update</strong> | Reporting period: August–October 2026
          </p>
          <p>
            <strong>Prepared by:</strong> Communications Office
          </p>
          <p>
            <strong>For:</strong> National Working Committee, National Leadership and Provincial Structures.
          </p>
        </div>

        <div className="w-full h-[2.5px] bg-[#e8ce52] my-4" />

        {/* Note from the CEO */}
        <div className="space-y-4 pt-2">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Note from the CEO
          </h2>

          <div className="flow-root">
            <div className="float-left mr-5 mb-3">
              <div className="relative w-28 h-36 sm:w-32 sm:h-40 border border-gray-300 shadow-sm overflow-hidden bg-gray-50">
                <Image
                  src="/images/committee/lulama-nare.jpg"
                  alt="Lulama Nare CEO PWMSA"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-800 text-justify">
              As the Progressive Women&apos;s Movement of South Africa (PWMSA) marks twenty years of organized struggle since our 2006 launch in Bloemfontein—and seventy years since the historic 1956 march on the Union Buildings—we are reminded that our fight for equality, dignity, and social justice remains as urgent as ever.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-800 text-justify mt-3">
              This reporting period has been a pivotal time for our movement. Through critical engagements like the Women&apos;s Parliament in Kimberley and our ongoing advocacy with media, labour, and government stakeholders, we have continued to place gender justice, economic empowerment, and accountability at the forefront of the national agenda. Today, the pass laws we resist are the realities of poverty, unemployment, and gender-based violence. We have firmly pressed the National Treasury to adequately fund the GBV disaster response, and we continue to demand that the protection of women&apos;s livelihoods remains central to every economic turnaround plan.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-800 text-justify mt-3">
              Thank you to our provincial structures, national leadership, and 35+ multi-sectoral affiliate organizations for your unwavering dedication. Let us keep building a better world, one act at a time.
            </p>

            <div className="mt-4 pt-2 font-sans">
              <p className="font-bold text-xs sm:text-sm text-gray-900">
                Lulama Nare CEO, PWMSA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center pt-8 text-xs text-gray-500 font-sans">
        1
      </div>
    </div>
  );

  const renderPage2 = () => (
    <div className="bg-white text-gray-900 shadow-md border border-gray-200 rounded-xl p-8 sm:p-14 max-w-[850px] mx-auto min-h-[1100px] flex flex-col justify-between font-serif relative">
      <div className="space-y-6">
        {/* Top row with text on left and photo on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          <div className="md:col-span-8 text-xs sm:text-sm leading-relaxed text-gray-800 text-justify">
            <p>
              The Progressive Women&apos;s Movement of South Africa (PWMSA) continues to champion women&apos;s emancipation, gender equality, social justice and economic transformation. As a national, multisectoral movement, PWMSA brings together women across sectors to advance a common agenda for equality, dignity and meaningful participation in the development of South Africa.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative w-44 h-32 border border-gray-300 shadow-sm overflow-hidden bg-gray-100">
              <Image
                src="/new-images/martch/20241012_164954 - Copy.jpg"
                alt="PWMSA Delegates Gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Middle section with photo on left and text on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-44 h-56 border border-gray-300 shadow-sm overflow-hidden bg-gray-100">
              <Image
                src="/new-images/martch/20241012_164951 - Copy.jpg"
                alt="Women Marching in Solidarity"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-800 text-justify">
            <p>
              Established in Bloemfontein on 8 August 2006, the Movement draws strength from the legacy of women&apos;s collective resistance, particularly the historic Women&apos;s March of 9 August 1956. That legacy places a responsibility on contemporary women&apos;s organisations to address the persistent inequalities affecting women and to advocate for practical, measurable change.
            </p>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                Building a Better World, <br />
                One Act at a Time
              </h2>
            </div>

            {/* Gold highlight box */}
            <div className="bg-[#fef8e7] border-2 border-[#e8ce52] p-4 rounded-sm text-xs leading-relaxed text-gray-800 text-justify">
              <p>
                During the 2026 reporting period, communications work has focused on strengthening PWMSA&apos;s public visibility, amplifying its advocacy positions, leadership and stakeholder engagements, developing campaign materials and improving organisational communications. The work has also highlighted the importance of connecting public awareness with policy advocacy, government accountability, economic empowerment and the prevention of gender-based violence and femicide (GBVF).
              </p>
            </div>
          </div>
        </div>

        {/* Overview paragraph */}
        <p className="text-xs sm:text-sm leading-relaxed text-gray-800 text-justify">
          This newsletter consolidates key communications activities, campaign messages, event materials and organisational priorities developed during the reporting period. It is intended to provide leadership and provincial structures with a clearer picture of the communications work undertaken and the opportunities for strengthening PWMSA&apos;s public voice.
        </p>

        {/* The Movement at a Glance Section */}
        <div className="pt-2 font-sans space-y-3">
          <h3 className="text-center text-sm font-bold tracking-widest text-gray-900 uppercase font-serif">
            THE MOVEMENT AT A GLANCE
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-[#1a1a1a] text-white p-4 text-center flex flex-col justify-between min-h-[110px]">
              <span className="text-3xl font-black text-[#e8ce52]">20</span>
              <span className="text-[10px] text-gray-300 leading-tight block mt-1">
                Years of organised struggle since the 2006 launch in Bloemfontein
              </span>
            </div>

            <div className="bg-[#1a1a1a] text-white p-4 text-center flex flex-col justify-between min-h-[110px]">
              <span className="text-3xl font-black text-[#e8ce52]">70</span>
              <span className="text-[10px] text-gray-300 leading-tight block mt-1">
                Years since 20 000 women marched on the Union Buildings
              </span>
            </div>

            <div className="bg-[#1a1a1a] text-white p-4 text-center flex flex-col justify-between min-h-[110px]">
              <span className="text-3xl font-black text-[#e8ce52]">35+</span>
              <span className="text-[10px] text-gray-300 leading-tight block mt-1">
                National multi-sectoral organisations united under one banner
              </span>
            </div>

            <div className="bg-[#1a1a1a] text-white p-4 text-center flex flex-col justify-between min-h-[110px]">
              <span className="text-3xl font-black text-[#e8ce52]">9</span>
              <span className="text-[10px] text-gray-300 leading-tight block mt-1">
                Provinces where the Movement is rebuilding its structures
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center pt-8 text-xs text-gray-500 font-sans">
        2
      </div>
    </div>
  );

  const renderPage3 = () => (
    <div className="bg-white text-gray-900 shadow-md border border-gray-200 rounded-xl p-8 sm:p-14 max-w-[850px] mx-auto min-h-[1100px] flex flex-col justify-between font-serif relative">
      <div className="space-y-5">
        {/* Top Header */}
        <div className="space-y-2">
          <div className="w-16 h-[2px] bg-gray-400 mb-2" />
          <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-gray-700 font-sans">
            WOMEN&apos;S MONTH 2026: Milestone of Resistance and Organisation
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
            &ldquo;Wathint&apos; abafazi, wathint&apos; imbokodo: seventy years of resistance, twenty years of organisation.&rdquo;
          </h2>

          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed text-justify">
            August 2026 marked the most significant Women&apos;s Month in a generation, serving as a platform for the Movement to take stock, sharpen its demands, and put South African women back at the centre of public discourse.
          </p>
        </div>

        {/* Large Central Banner Image */}
        <div className="relative w-full h-56 sm:h-72 border border-gray-300 shadow-sm overflow-hidden bg-gray-100">
          <Image
            src="/new-images/martch/20241012_165836 - Copy.jpg"
            alt="Women's Month 2026 Outdoor Assembly"
            fill
            className="object-cover"
          />
        </div>

        {/* Gold Milestones Box */}
        <div className="bg-[#fef6dc] border border-[#d6b738] p-6 space-y-5 text-xs sm:text-sm text-gray-900">
          {/* Item 1 */}
          <div className="grid grid-cols-12 gap-3 items-start">
            <div className="col-span-3 sm:col-span-2 font-bold text-gray-900 font-sans">
              8 August
            </div>
            <div className="col-span-9 sm:col-span-10 space-y-1">
              <h4 className="font-bold text-gray-900">20th Anniversary</h4>
              <p className="text-gray-800 text-justify leading-relaxed">
                Recommitted affiliates to our original mandate—uniting women, deepening government partnerships, and fighting discrimination in every sphere.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-12 gap-3 items-start">
            <div className="col-span-3 sm:col-span-2 font-bold text-gray-900 font-sans">
              9 August
            </div>
            <div className="col-span-9 sm:col-span-10 space-y-1">
              <h4 className="font-bold text-gray-900">National Women&apos;s Day</h4>
              <p className="text-gray-800 text-justify leading-relaxed">
                Honoured icons Lilian Ngoyi, Helen Joseph, Rahima Moosa, Sophia Williams-De Bruyn, and the 20,000 women of 1956, declaring that today&apos;s pass laws are poverty, unemployment, and violence.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-12 gap-3 items-start">
            <div className="col-span-3 sm:col-span-2" />
            <div className="col-span-9 sm:col-span-10 space-y-1">
              <h4 className="font-bold text-gray-900">Women&apos;s Parliament, Kimberley</h4>
              <p className="text-gray-800 text-justify leading-relaxed">
                CEO Lulama Nare presented the final declaration report, placing gender justice, economic empowerment, and accountability for the Women&apos;s Charter on the national agenda.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="grid grid-cols-12 gap-3 items-start">
            <div className="col-span-3 sm:col-span-2" />
            <div className="col-span-9 sm:col-span-10 space-y-1">
              <h4 className="font-bold text-gray-900">Provincial dialogues</h4>
              <p className="text-gray-800 text-justify leading-relaxed">
                Convened community activations focusing on GBV, economic inclusion, and young women&apos;s rights, transforming Women&apos;s Month into a season of active organising and recruitment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center pt-8 text-xs text-gray-500 font-sans">
        3
      </div>
    </div>
  );

  const renderPage4 = () => (
    <div className="bg-white text-gray-900 shadow-md border border-gray-200 rounded-xl p-8 sm:p-14 max-w-[850px] mx-auto min-h-[1100px] flex flex-col justify-between font-serif relative">
      <div className="space-y-6">
        {/* Top Gold Box */}
        <div className="bg-[#fef5dc] border border-[#e2c140] p-4 text-gray-900 space-y-1">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-sans text-gray-700">
            O U R &nbsp; M E S S A G E &nbsp; T H I S &nbsp; A U G U S T
          </p>
          <h2 className="text-base sm:text-lg font-bold leading-snug">
            The women of 1956 refused to carry passes. The women of 2026 refuse to carry poverty, violence and exclusion.
          </h2>
        </div>

        {/* Images & Quote Callout Row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          <div className="sm:col-span-4">
            <div className="relative w-full h-40 border border-gray-300 shadow-sm overflow-hidden bg-gray-100">
              <Image
                src="/new-images/martch/20241129_112434.jpg"
                alt="Community March"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="relative w-full h-40 border border-gray-300 shadow-sm overflow-hidden bg-gray-100">
              <Image
                src="/images/news/ekurhuleni-gbvf-emergency.jpg"
                alt="Ekurhuleni Emergency March"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="sm:col-span-4 p-3 bg-gray-50/70 border-l-2 border-gray-400">
            <p className="text-sm sm:text-base font-bold text-gray-900 italic leading-snug">
              &ldquo;Eleven women&apos;s bodies found in Ekurhuleni since July. Eleven lives lost, families shattered, and a nation demanding answers.&rdquo;
            </p>
          </div>
        </div>

        {/* Stakeholder Engagements Header */}
        <div className="space-y-1.5 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 uppercase font-sans tracking-tight">
            STAKEHOLDER ENGAGEMENTS &amp; KEY MILESTONES (AUGUST–OCTOBER 2026)
          </h3>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            PWMSA actively participated in high-level dialogues and stakeholder collaborations to expand its coalition:
          </p>
        </div>

        {/* Stakeholder List Entries (Page 4 portion) */}
        <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-gray-800">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>Women&apos;s Parliament | 13–14 August | Northern Cape</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              An important platform for women&apos;s participation in democratic processes, policy discussions and advocacy on issues affecting women and their communities.
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>702 Radio | 10 August</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              A media engagement opportunity to amplify PWMSA&apos;s advocacy priorities and contribute to public conversations on women&apos;s rights and social issues.
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>Gertrude Shope | 15 August | Pretoria</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              An invitation associated with women&apos;s leadership and empowerment. The specific event theme should be confirmed from the invitation.
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>eNCA | 17 August</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              A media engagement opportunity to share PWMSA&apos;s perspectives and strengthen the visibility of its advocacy work.
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>AIDC-EC | 27 August | Eastern Cape</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              An invitation for stakeholder engagement in the Eastern Cape. The event&apos;s specific purpose should be confirmed against the original invitation.
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>COSATU | 14–17 September | Midrand</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              An invitation connected to organised labour and stakeholder engagement, offering an opportunity to strengthen dialogue on workers&apos; rights, gender equality and women&apos;s participation.
            </p>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center pt-8 text-xs text-gray-500 font-sans">
        4
      </div>
    </div>
  );

  const renderPage5 = () => (
    <div className="bg-white text-gray-900 shadow-md border border-gray-200 rounded-xl p-8 sm:p-14 max-w-[850px] mx-auto min-h-[1100px] flex flex-col justify-between font-serif relative">
      <div className="space-y-6">
        {/* Stakeholder List Entries (Page 5 continuation) */}
        <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-gray-800">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>COSATU | 22 September | Kempton Park</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              A further engagement opportunity involving organised labour and stakeholder collaboration. The specific event details should be verified.
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>MQA | 1 October | Emperors Palace</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              An invitation to participate in an engagement associated with the Mining Qualifications Authority. The event&apos;s focus should be confirmed from the original invitation.
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-bold text-gray-900 font-sans text-xs sm:text-sm">
              <span className="text-[#3b7a3a]">➔</span>
              <span>IFP | 9 October | Germiston</span>
            </div>
            <p className="pl-6 text-gray-700 text-justify">
              An invitation to a discussion on gender-based violence and femicide, creating an opportunity for dialogue on practical interventions, collaboration and support for affected individuals and communities.
            </p>
          </div>
        </div>

        {/* Shaping the National Conversation Header */}
        <div className="space-y-1 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
            Shaping the national conversation, holding power to account
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            Our voice in the media and in the corridors of power is a weapon of the struggle. These are the positions the Movement has advanced in the public domain.
          </p>
        </div>

        {/* 3 Pillars Colored Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans">
          {/* Column 1: Cream/Tan */}
          <div className="bg-[#fef6e9] border border-[#f3dfc4] p-4 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-gray-800 uppercase tracking-widest block font-sans">
                ACCOUNTABILITY
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 font-serif leading-tight">
                Monitoring public spending on women
              </h3>
            </div>
            <p className="text-xs text-gray-800 leading-relaxed pt-3">
              Monitoring public spending on gender programmes to ensure the femicide crisis remains a top national priority.
            </p>
          </div>

          {/* Column 2: Dark Charcoal */}
          <div className="bg-[#4a4740] text-white p-4 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block font-sans">
                FISCAL ADVOCACY
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif leading-tight">
                Fund the GBV disaster response: our call to National Treasury
              </h3>
            </div>
            <p className="text-xs text-gray-200 leading-relaxed pt-3">
              Pressing National Treasury for dedicated, sustainable funding for GBV disaster response and survivor support.
            </p>
          </div>

          {/* Column 3: Green */}
          <div className="bg-[#4c8b4a] text-white p-4 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest block font-sans">
                LABOUR &amp; LIVELIHOODS
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif leading-tight">
                Retrenchments are a gender issue
              </h3>
            </div>
            <p className="text-xs text-emerald-50 leading-relaxed pt-3">
              Demanding that the protection of women&apos;s livelihoods be prioritized in all employer and government turnaround plans amid waves of retrenchments.
            </p>
          </div>
        </div>

        {/* Solidarity Sign-off */}
        <div className="pt-2">
          <p className="italic text-xs sm:text-sm text-gray-900">
            In solidarity, Communications Office, PWMSA
          </p>
        </div>

        {/* Contact Footer Peach/Salmon Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
          <div className="bg-[#fce5d4] p-4 text-xs text-gray-900 space-y-1">
            <strong className="block text-xs font-bold text-gray-900">
              Head Office
            </strong>
            <p className="text-gray-800">
              Kumbukeni Children &amp; Family Centre <br />
              105 William Nicol Drive, Fourways, Johannesburg
            </p>
            <p className="text-gray-900 font-semibold pt-0.5">
              (011) 705 1960
            </p>
          </div>

          <div className="bg-[#fbd3b6] p-4 text-xs text-gray-900 space-y-1">
            <strong className="block text-xs font-bold text-gray-900">
              Contact the Movement
            </strong>
            <p className="text-gray-800">
              General: info@pwmsa.org.za
            </p>
            <p className="text-gray-800">
              Media: communications@pwmsa.org.za
            </p>
            <p className="text-gray-800 font-semibold">
              Web: www.pwmsa.org.za
            </p>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center pt-8 text-xs text-gray-500 font-sans">
        5
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      {showPageNavigation && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-gray-100 p-3 rounded-2xl border border-gray-200 font-sans">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-xs font-bold text-gray-700 mr-2 flex items-center gap-1">
              <FileText size={14} /> Newsletter Pages:
            </span>
            <button
              onClick={() => setCurrentPage("all")}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === "all"
                  ? "bg-[#715832] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Pages (1–5)
            </button>
            {[1, 2, 3, 4, 5].map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-[#715832] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                Page {pageNum}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.print();
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-gray-800 px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Printer size={13} /> Print Document
            </button>
          </div>
        </div>
      )}

      {/* Document Sheets Container */}
      <div className="space-y-8 bg-[#f5f2eb] p-2 sm:p-6 rounded-2xl border border-gray-200">
        {currentPage === "all" ? (
          <>
            {renderPage1()}
            {renderPage2()}
            {renderPage3()}
            {renderPage4()}
            {renderPage5()}
          </>
        ) : currentPage === 1 ? (
          renderPage1()
        ) : currentPage === 2 ? (
          renderPage2()
        ) : currentPage === 3 ? (
          renderPage3()
        ) : currentPage === 4 ? (
          renderPage4()
        ) : (
          renderPage5()
        )}
      </div>

      {/* Pagination Footer */}
      {showPageNavigation && currentPage !== "all" && (
        <div className="flex items-center justify-between pt-2 font-sans">
          <button
            onClick={() => setCurrentPage((prev) => (typeof prev === "number" && prev > 1 ? prev - 1 : 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer"
          >
            <ChevronLeft size={14} /> Previous Page
          </button>
          <span className="text-xs font-bold text-gray-600">
            Page {currentPage} of 5
          </span>
          <button
            onClick={() => setCurrentPage((prev) => (typeof prev === "number" && prev < 5 ? prev + 1 : 5))}
            disabled={currentPage === 5}
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer"
          >
            Next Page <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
