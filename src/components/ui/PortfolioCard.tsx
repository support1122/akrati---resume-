import { PortfolioItem } from '@/data/data';

interface PortfolioCardProps extends PortfolioItem {
  priority?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, href, desc, priority = false }) => {
  return (
    <div className="bg-gradient-to-br from-[#FD853A] to-[#FEB273] rounded-[20px] p-6 text-white min-h-[300px] flex flex-col justify-between group hover:scale-105 transition-transform duration-300">
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white/90 leading-relaxed">{desc}</p>
      </div>
      <div className="flex justify-end mt-4">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <span className="text-white text-xl">→</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;