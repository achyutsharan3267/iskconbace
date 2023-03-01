import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-prabhupadas-desire',
  templateUrl: './prabhupadas-desire.component.html',
  styleUrls: ['./prabhupadas-desire.component.scss'],
})
export class PrabhupadasDesireComponent {
  CarusalData = [
    {
      quotes:
        ' wish that this track of land may be turned into New vrindaban. You have new york, New England and So many "New" duplicates of European countries in the USA:',
      author: '–Srila Prabhupada',
    },
    {
      quotes:
        'हमारे पास प्रेरणा हो सकती है, हमारे पास कारण हो सकते हैं, हमारे पास भक्तिमय सेवा में आने के लिए अलग-अलग कारक हो सकते हैं, लेकिन यह प्रक्रिया इतनी शक्तिशाली और प्रबल है कि हम शुद्ध हो जाएंगे और महसूस E ETERNAL SHELTER करेंगे कि केवल एक चीज जो हमें संतुष्ट करती है वह है शुद्ध भक्तिमय सेवा ।',
      author: '–Srila Gopal Krishna Goswami',
    },
    {
      quotes:
        ' We should accept only what is necessary to keep body and soul together, we should endeavor only to earn as much as is necessary to keep body and soul together and the rest of My Ashraya the time should be used for Krishna Consciousness. This is known as simple living and high thinking.',
      author: '–Srila Gopal Krishna Goswami',
    },
    {
      quotes:
        ' प्रभुपाद ने हमें भगवद्धाम वापस जाने के लिए वे सभी चीज़े दी हैं, जिनकी हमें आवश्यकता है। हमारे पास वह सब कुछ है जो हमें चाहिए। एक अचूक नुस्खा है। हमारे पास पवित्र नाम है, हमारे पास सभी पुस्तकें हैं, सभी विग्रह सब कुछ हैं। हमें कुछ भी आविष्कार नहीं करना है। हमें बस इतना करना है कि विश्वास के साथ इस प्रक्रिया का पालन करना है और फिर सफलता की पूरी गारंटी है।',
      author: '–Srila Gopal Krishna Goswami',
    },
  ];

  aboutDesire = [
    'His Divine Grace A.C. Bhaktivedanta Swami Prabhupada had a strong desire to spread the teachings of Bhakti yoga and the message of the ancient Indian scriptures to people all over the world. He believed that the practice of devotion to God and the path of Bhakti yoga were the means to achieve inner peace, happiness, and spiritual enlightenment, and he wanted to share this knowledge with as many people as possible.',
    "Srila Prabhupada was deeply inspired by the life and teachings of Lord Caitanya, a 16th century saint and avatar of Lord Krishna, who spread the practice of congregational chanting of the Holy Names of God as a means to attain spiritual realization. Srila Prabhupada saw the relevance of Lord Caitanya's teachings in the modern world, and wanted to bring them to the Western world, where they were largely unknown.",
    "Srila Prabhupada's desire to spread the teachings of Bhakti yoga led him to leave his home and family in India and travel to the United States in 1965. Despite facing many challenges and obstacles, he persevered and established the International Society for Krishna Consciousness (ISKCON), also known as the Hare Krishna movement. Through his writing, preaching, and the establishment of temples and centers for education andculture, Srila Prabhupada was able to bring the teachings of Bhakti yoga to people all over the world.",
    "Srila Prabhupada's desire to share the message of Bhakti yoga continues to inspire and guide his disciples and followers, and his legacy continues to live on through the work of the International Society for Krishna Consciousness and the many people who have been touched by his teachings.",
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 5000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  quotesoption: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 5000,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
        nav: false,
      },
    },
    nav: false,
  };
}
