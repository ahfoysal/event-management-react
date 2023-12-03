import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Policy = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center  inline font-normal from-[#d4cbca] to-[#FFB457]  bg-clip-text text-transparent bg-gradient-to-b font-lilita">
          Policy For The Ticket
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="p-2 md:p-6 text-xs md:text-sm list-disc list-outside">
          <li>
            <span className="text-[#FFB457]">Access to the Event:</span> The
            gate will be open for entry at 2:00 PM sharp. Event will start from
            4:00 PM. You must carry the electronic/printed copy of your ticket
            while entering the premises.
          </li>
          <li>
            <span className="text-[#FFB457]">Security & Entry:</span> Every
            individual will undergo a thorough security check before entering
            the event. By purchasing a ticket, you consent to a comprehensive
            inspection, which includes a thorough body search if required.
          </li>

          <li>
            <span className="text-[#FFB457]">NO Refunds or Exchanges:</span>{" "}
            Tickets purchased for the event are final and cannot be refunded.
            Individual identity will be cross-checked upon entry.
          </li>
          <li>
            <span className="text-[#FFB457]">No Parking Facility:</span> You are
            requested not to bring any personal vehicle at the event premises as
            there will be no parking facility available.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Policy;
