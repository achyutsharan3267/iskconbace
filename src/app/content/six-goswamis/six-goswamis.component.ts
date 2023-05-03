import { Component } from '@angular/core';
declare function pop(): any;
@Component({
  selector: 'app-six-goswamis',
  templateUrl: './six-goswamis.component.html',
  styleUrls: ['./six-goswamis.component.scss']
})
export class SixGoswamisComponent {
  ngOnInit(): void {
    pop();
  }

  goswamis = [
    {
      goswamisImage:'https://gaudiyahistory.iskcondesiretree.com/wp-content/uploads/2011/08/Sanatana-Goswami-5.jpg',
      goswamisName: 'Sanatan Goswami ',
      aboutOne: '(c 1465-1555 AD) an expert in logic, was known as Amar in his family. He was born at Ramkeli village near Gauda and his forefathers were Deccan Karnataka Brahmins. He is believed to have lived at Fateyabad in Bakla Chandradwip, at Nabahatta or Naihati, and Ramkeli in Maldah. The logician basudev sarvabhauma and his brother Madhusudan Vidyavachaspati taught him logic. Sanatan is said to have learnt Arabic and Persian well since he had to work as revenue minister (sakar mallik) in the court of Hussain Shah. ',
      aboutTwo:'Although employed by the state, he was greatly influenced by the spirit of renunciation. He left his job after meeting Chaitanyadev at Ramkeli when the sage was on his way to Vrindavan (probably in 1515 AD) and became a follower of Shri Chaitanya. From then on, he became known as Sanatan.',
      aboutThree:'Sri Chaitanya stayed at Kashi for two months on his way to Nilachal. He entrusted Sanatan with four assignments: writing prayer books, preaching devotion and rites, discovering holy sites, and worshipping the image of deities.',
      aboutFour:'Sanatan stayed at Vrindavan from then on and worked to give Vaisnavism a sound philosophical footing. He wrote several books in Sanskrit which include Brhat-Bhagavatamrta, Brhat-Vaisvavatosini (commentaries on Shrimadbhagavata), Lilastava, Haribhaktivilasa and Digdarshani (commentary).'
    },
    {
      goswamisImage:'https://www.purebhakti.com/images/stories/lectures/08rupagosvami.jpg',
      goswamisName: 'Rupa Goswami ',
      aboutOne: '(c 1470-1559 AD) was the younger brother of Sanatan. Although he was christened as Santos, he is better known as Rupa, as the name given to him by Sri Chaitanya. He also worked in the court of Hussain Shah as dabir khas (principal secretary) to Sultan. From his boyhood, Rupa was a devotee of Krishna. He met Chaitanyadev at Prayag when he was on his way to Vrindavan. He took some lessons in devotional lore from Chaitanyadev. Later, he set out for Vrindavan at his bidding and discovered the lost holy site and an image of Govinda.',
      aboutTwo:'He wrote many important books such as Hangsaduta (Duck messenger), Uddhava-Sandesha, Vidagdha-Madhava, Lalita-Madhava, Danakeli-Kaumudi, Bhaktirasamrta-Sindhu (Sea of Devotion), Ujjvalanilamani (Brilliant Lapis Lazuli), Natakachandrika, Vilapa-Kusumavjali, Upadeshamrta (Advice), Govinda-birudavali, Astadashalila, Radhakrsva-Ganoddesha etc. Among the Goswamins, Rupa was the most famous for his poetical talent and erudition.',
     
    },
    {
      goswamisImage:'https://www.iskconbangalore.org/blog/wp-content/uploads/2015/08/srila-raghunath-das-goswami.jpg',
      goswamisName: 'Raghunath Das',
      aboutOne: "(c 1490-1577 AD) born at a place called Haripur in Saptagram, received education from the house priest Balaram Acharya. He showed signs of asceticism in his childhood. Impressed by the personality and devotion of Haridas Thakur, he offered his services to Haridas and earned his patronage. Hearing about Chaitanyadev at this time, he left for Nilachal and put himself at Chaitanyadev's service. Chaitanyadev then put Swarup Damodar in Raghunath's custody. This is why he is also known as 'Swarup's Raghu'.",
      aboutTwo:"He lived at Nilachal for sixteen years. After the death of Sri Chaitanya and Swarup Damodar, he took the shelter of Rupa and Sanatan at Vrindavan. Raghunath adhered to the philosophy of the Vaisnava way of life closely and the practice of prasad (offering to deities) during his stay at Nilachal and Vrindavan. He discovered Radhakunda and Shyamakunda. After restoring Radhakunda, he lived there till his death. As he came to the last part of his life, he began abstaining from food and sleep; he used to sit by Radhakunda and chant the name of radha.  ",
      aboutThree:"The extremely ascetic way of life he led is unusual even among Goswamins. His books include Muktacharita (Life of a pearl), Stavavali (Praise), Danacharita Ba Shridanakelichintamani, Manahshiksa, Suravali, Shiksapatala, Shrinamacharita etc.",
      
    },
    {
      goswamisImage:'https://gaudiyahistory.iskcondesiretree.com/wp-content/uploads/2011/08/Gopala-Bhatta-Goswami.jpg',
      goswamisName: 'Gopal Bhatta ',
      aboutOne: "(c 1500-1585 AD) was originally from South India. According to murari gupta, on his way to the Deccan, Chaitanyadev stayed at the house of Goapl Bhatta when he was a young boy. Seeing Gopal's devotion to Chaitanyadev, his father Trimalla Bhatta, or Venkaka Bhatta in another account, offered her son's service to Chaitanyadev. Chaitanyadev blessed Gopal Bhatta, who after growing up, went to Vrindavan and met other Goswamins. Sri Chaitanya sent his loin-cloth and a wooden seat for him. The seat made of wood, placed at Radharaman Temple, is still worshipped in Vrindavan. Gopal was buried in a place located behind this temple.",
      aboutTwo:"Gopal was well versed in Sanskrit and philosophy. He wrote Shrikrisvaballabha, a commentary, on the play called Krisvakarnamrta. He wrote an explanation of the book called Satsandrarbha in an aphoristic form after discussing its philosophy with Rupa and Sanatan. Another of his book named Satkriyasaradipika has descriptions of fourteen rituals of a wedding. The book also lays out rules for dresses and conduct. The sanskrit sahitya parisat library has a puthi called Danakhanda (No. 427) by Gopal Bhatta. Some scholars believe that the book called Haribhaktivilasa was written by Gopal Bhatta; but it could be that the context of a book originally written by Sanatan was expanded by Gopal.",
     
    },
    {
      goswamisImage:'https://www.iskconbhiwandi.org/images/gaudiya-vaishnavism/Raghunatha-Dasa-Goswami.webp',
      goswamisName: 'Raghunath Bhatta',
      aboutOne: "(c 1506-1580 AD) played an important role in restoring the holy sites of Vrindavan and founding images of deities. In addition, he also played a role in demarcating the forests stretching along the 84 kroshas (168 miles) which present-day Vaisnava devotees must traverse.",
      aboutTwo:"Raghunath’s father was Tapan Mishra. Sri Chaitanya, on his tour of the eastern Bengal, stayed at the house of Tapan Misra on the bank of the padma. Chaitanyadev then indoctrinated Raghunath. Raghunath earned a name for himself because of his erudition after mastering the faith at Kashi. He witnessed the lila (play) of Chaitanyadev at Nilachal. After his parents’ death, he left for Vrindavan and met Rupa and Sanatan there. He became famous as the greatest reciter of the Bhagavata.  ",
     
    },
    {
      goswamisImage:'https://harekrsna.com/sun/editorials/03-21/jiva4.jpg',
      goswamisName: 'Jiva Goswami ',
      aboutOne: "(c 1514-1609 AD) nephew of Rupa and Sanatan, was also born at Ramkeli. After receiving his primary schooling in Gauda, he went to Navadwip to meet Nityananda who directed him to study diverse subjects with Pandit Madhusudan Vachaspati at Kashi. He met his uncles Rupa and Sanatan there. Rupa Goswami endeavoured him in Vaisnavism. Jiva learnt many things in the company of Rupa and Sanatan.",
      aboutTwo:"After their deaths, Jiva led the Gaudiya Vaisnava community at Vrindavan. He endorsed the worship of the image of krishna along with an image of Radha placed at its left",
      aboutThree:"Jiva was devoted to Sri Chaitanya from his childhood; his devotion further deepened after his indoctrination. He wrote several volumes on Vaisnavism, tantra (service books) and commentaries and annotations.",
      aboutFour:"His Satsandarbha is a famous philosophical treatise. In the six chapters of the book, he discussed different philosophical beliefs. Other books by him are Harinamamrtavyakarana, Sangkalpakalpadruma, Sarasanggraha, Gopalachampu, Dhatusutramalika and Madhavamahotsava. In addition, he wrote commentaries on and annotations to Ujjvalnilamani, Bhaktirasamrtasindhu, Gopalatapani and annotation of Bhagavata. [Basanti Choudhury]",
     
    },
  ];
}
